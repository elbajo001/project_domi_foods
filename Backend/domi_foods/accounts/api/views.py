from django.contrib.auth.models import User
from django.contrib.auth import login
from rest_framework import generics, permissions, status, viewsets
from rest_framework.response import Response
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view
from knox.views import LoginView as KnoxLoginView
from knox.models import AuthToken
from accounts.models import UserRestaurant
from .serializers import (
    UserRestaurantSerializer,
    ChangePasswordSerializer,
    UserSerializer,
    RegisterUserSerializer,
)


# Django REST Framework Tutorial – Change & Reset Password


class ChangePasswordView(generics.UpdateAPIView):
    """
    An endpoint for changing password.
    """
    serializer_class = ChangePasswordSerializer
    model = User
    permission_classes = (IsAuthenticated,)

    def get_object(self, queryset=None):
        obj = self.request.user
        return obj 

    def update(self, request, *args, **kwargs):
        self.object = self.get_object()
        serializer = self.get_serializer(data=request.data)

        if serializer.is_valid():
            # Check old password
            if not self.object.check_password(serializer.data.get("old_password")):
                return Response({"answer": "Wrong password"}, status=status.HTTP_400_BAD_REQUEST)
            # set_password also hashes the password that the user will get
            self.object.set_password(serializer.data.get("new_password"))
            self.object.save()
            response = {
                'answer': 'Password updated',
            }

            return Response(response)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# - -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -

class UserRestaurantRegister(viewsets.ModelViewSet):
    queryset = UserRestaurant.objects.all()
    serializer_class = UserRestaurantSerializer


@api_view(['GET'])
def UserRestaurantList(request):
    User_restaurant = UserRestaurant.objects.filter(state_delete=False)
    if len(User_restaurant) != 0:
        serializer = UserRestaurantSerializer(User_restaurant, many=True)
        return Response(serializer.data)
    else:
        return Response({'answer': 'No hay usuarios de restaurantes para listar'})


@api_view(['GET'])
def UserRestaurantDetail(request, pk):
    try:
        User_restaurant = UserRestaurant.objects.get(document=pk)
    except UserRestaurant.DoesNotExist:
        return Response({'answer': 'No se encontró datos raciocinados a esa identificación'})

    if request.method == 'GET':
        serializer = UserRestaurantSerializer(User_restaurant, many=False)
        return Response(serializer.data)


@api_view(['DELETE', ])
def UserRestaurantDelete(request, pk):
    try:
        User_restaurant = UserRestaurant.objects.get(document=pk)
    except UserRestaurant.DoesNotExist:
        return Response({'answer': 'No se encontró datos raciocinados a esa identificación'})

    if request.method == 'DELETE':
        User_restaurant.state_delete = True
        User_restaurant.save()
        return Response({'answer': 'El cliente del restaurante se eliminó con éxito.'})


@api_view(['PUT', ])
def UserRestaurantUpdate(request, pk):
    try:
        User_restaurant = UserRestaurant.objects.get(document=pk)
    except UserRestaurant.DoesNotExist:
        return Response({'answer': 'No se encontró datos raciocinados a esa identificación'})

    if request.method == 'PUT':
        serializer = UserRestaurantSerializer(User_restaurant, data=request.data)
        data = {}
        if serializer.is_valid():
            serializer.save()
            data['success'] = "El usuario se actualizo correctamente."
            return Response(data=data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# - -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -

def UserDetail(par_username):
    User_django = User.objects.get(username=par_username)
    serializer = UserSerializer(User_django, many=False)
    return serializer.data


# Register API
class UserRegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterUserSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthTokenSerializer.objects.create(user)[1]
        })


class UserLoginAPI(KnoxLoginView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        serializer = AuthTokenSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        login(request, user)
        return super(UserLoginAPI, self).post(request, format=None)

    def get_post_response_data(self, request, token, instance):
        UserSerializer = self.get_user_serializer_class()
        data = {
            "answer": "True",
            "user": UserDetail(request.user),
            'expiry': self.format_expiry_datetime(instance.expiry),
            'token': token
        }
        if UserSerializer is not None:
            data["user"] = UserSerializer(
                request.user,
                context=self.get_context()
            ).data
        return data
