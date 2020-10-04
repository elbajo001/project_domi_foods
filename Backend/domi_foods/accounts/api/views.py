from django.contrib.auth.models import User
from django.contrib.auth import login
from rest_framework import generics, permissions, status, viewsets
from rest_framework.response import Response
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view
from knox.views import LoginView as KnoxLoginView
from knox.models import AuthToken
from accounts.models import(
    UserRestaurant,
    Admin,
    Client,
    DeliveryMan
) 

from .serializers import (
    UserRestaurantSerializer,
    ChangePasswordSerializer,
    UserSerializer,
    RegisterUserSerializer,
    AdminSerializer,
    ClientSerializer,
    DeliveryManSerializer,
)

 
# Django REST Framework Tutorial – Change & Reset Password

'''
    *   *   *   *   *   *   *   *   *  *   USER DELIVERY MAN   *   *   *   *   *   *   *   *   *   *
'''
class DeliveryManRegister(viewsets.ModelViewSet):
    queryset = DeliveryMan.objects.all()
    serializer_class = DeliveryManSerializer

@api_view(['GET'])
def DeliveryManDetail(request, pk):
    try:
        delivey_man = DeliveryMan.objects.get(id_user_restaurant = pk)
    except DeliveryMan.DoesNotExist:
        return Response({'answer':'No se encontró datos relacionados a esa identificación'})

    if request.method == 'GET':
        serializer = DeliveryManSerializer(delivey_man, many = False)
        return Response(serializer.data)


'''
    *   *   *   *   *   *   *   *   *  *   USER CLIENT   *   *   *   *   *   *   *   *   *   *
'''
class ClientRegister(viewsets.ModelViewSet):
    queryset = Client.objects.all()
    serializer_class = ClientSerializer

@api_view(['GET'])
def ClientDetail(request, pk):
    try:
        user_client = Client.objects.get(id_user_restaurant = pk)
    except Client.DoesNotExist:
        return Response({'answer':'No se encontró datos relacionados a esa identificación'})

    if request.method == 'GET':
        serializer = ClientSerializer(user_client, many = False)
        return Response(serializer.data)

# Django REST Framework Tutorial – Change & Reset Password
'''
    *   *   *   *   *   *   *   *   *  *   USER ADMIN   *   *   *   *   *   *   *   *   *   *
'''
class AdminRegister(viewsets.ModelViewSet):
    queryset = Admin.objects.all()
    serializer_class = AdminSerializer

@api_view(['GET'])
def AdminDetail(request, pk):
    try:
        User_admin = Admin.objects.get(id_user_restaurant = pk)
    except Admin.DoesNotExist:
        return Response({'answer':'No se encontró datos relacionados a esa identificación'})

    if request.method == 'GET':
        serializer = AdminSerializer(User_admin, many = False)
        return Response(serializer.data)


'''
    *   *   *   *   *   *   *   *   *  *   USER RESTAURAN   *   *   *   *   *   *   *   *   *   *
'''
class UserRestaurantRegister(viewsets.ModelViewSet):
    queryset = UserRestaurant.objects.all()
    serializer_class = UserRestaurantSerializer

@api_view(['GET'])
def UserRestaurantList(request):
    User_restaurant = UserRestaurant.objects.filter(state_delete = False)
    if len(User_restaurant) != 0:
        serializer = UserRestaurantSerializer(User_restaurant, many = True)
        return Response(serializer.data)
    else:
        return Response({'answer':'No hay usuarios de restaurantes para listar'})

@api_view(['GET'])
def UserRestaurantDetail(request, pk):
    try:
        User_restaurant = UserRestaurant.objects.get(document = pk)
    except UserRestaurant.DoesNotExist:
        return Response({'answer':'No se encontró datos relacionados a esa identificación'})

    if request.method == 'GET':
        serializer = UserRestaurantSerializer(User_restaurant, many = False)
        return Response(serializer.data)

@api_view(['DELETE',])
def UserRestaurantDelete(request, pk):
    try:
        User_restaurant = UserRestaurant.objects.get(document = pk)
    except UserRestaurant.DoesNotExist:
        return Response({'answer':'No se encontró datos relacionados a esa identificación'})

    if request.method == 'DELETE':
        User_restaurant.state_delete = True
        User_restaurant.save()
        return Response({'answer':'El cliente del restaurante se eliminó con éxito.'})


@api_view(['PUT',])
def UserRestaurantUpdate(request, pk):
    try:
        User_restaurant = UserRestaurant.objects.get(document = pk)
    except UserRestaurant.DoesNotExist:
        return Response({'answer':'No se encontró datos relacionados a esa identificación'})

    if request.method == 'PUT':
        serializer = UserRestaurantSerializer(User_restaurant, data = request.data)
        data = {}
        if serializer.is_valid():
            serializer.save()
            data["success"] = "Se actualizo correctamente la información."
            return Response(data=data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

'''
    *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
'''

def document_search(par_username):
    User_django_l = User.objects.get(username = par_username)
    User_Restaurant_l = UserRestaurant.objects.get(user = User_django_l.id)
    return User_Restaurant_l.document

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
class UserRegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterUserSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
        "answer":"True",
        "id": user.id,
        "token": AuthToken.objects.create(user)[1]
        })

def existing_user(par_username):
    try:
        User_django_l = User.objects.get(username = par_username)
        try:
            User_Restaurant_l = UserRestaurant.objects.get(user = User_django_l.id)
            return True
        except UserRestaurant.DoesNotExist:
            User_django_l.delete()
            return False
    except User.DoesNotExist:
        return False


class UserLoginAPI(KnoxLoginView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        serializer = AuthTokenSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        answer = existing_user(request.data['username'])
        if answer is False:
            return Response({'answer':'Está cuenta no existe'})
        user = serializer.validated_data['user']
        login(request, user)
        return super(UserLoginAPI, self).post(request, format=None)

    def get_post_response_data(self, request, token, instance):
        UserSerializer = self.get_user_serializer_class()
        document_user = document_search(request.user)
        data = {
            "answer":"True",
            "document": document_user,
            'expiry': self.format_expiry_datetime(instance.expiry),
            'token': token
        }
        if UserSerializer is not None:
            data["user"] = UserSerializer(
                request.user,
                context=self.get_context()
            ).data
        return data
