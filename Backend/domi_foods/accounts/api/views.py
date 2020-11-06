"""
    Sección donde se importan los módulos de Django
"""
from django.contrib.auth.models import User
from django.contrib.auth import login
from rest_framework import generics, permissions, status, viewsets
from rest_framework.response import Response
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view
from knox.views import LoginView as KnoxLoginView
from knox.models import AuthToken
"""
    Sección donde se importan los módulos  locales
"""
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


class DeliveryManRegister(viewsets.ModelViewSet):
    """
    Esta vista permite a las REST API  poder crear y listar un DeliveryMan.
    """
    queryset = DeliveryMan.objects.all()
    serializer_class = DeliveryManSerializer

@api_view(['GET'])
def DeliveryManDetail(request, pk):
    """
    Esta vista permite a las REST API poder retorna un DeliveryMan según su
    identificación.
    """
    try:
        delivey_man = DeliveryMan.objects.get(id_user_restaurant = pk)
    except DeliveryMan.DoesNotExist:
        return Response({'answer':'No se encontró datos relacionados a esa identificación'})

    if request.method == 'GET':
        serializer = DeliveryManSerializer(delivey_man, many = False)
        return Response(serializer.data)

class ClientRegister(viewsets.ModelViewSet):
    """
    Esta vista permite a las REST API poder crear y listar un Client 
    """
    queryset = Client.objects.all()
    serializer_class = ClientSerializer

@api_view(['GET'])
def ClientDetail(request, pk):
    """
    Esta vista permite a las REST API poder retorna un Client según su
    identificación.
    """
    try:
        user_client = Client.objects.get(id_user_restaurant = pk)
    except Client.DoesNotExist:
        return Response({'answer':'No se encontró datos relacionados a esa identificación'})

    if request.method == 'GET':
        serializer = ClientSerializer(user_client, many = False)
        return Response(serializer.data)

class AdminRegister(viewsets.ModelViewSet):
    """
    Esta vista permite a las REST API poder crear y listar un Admin. 
    """
    queryset = Admin.objects.all()
    serializer_class = AdminSerializer

@api_view(['GET'])
def AdminDetail(request, pk):
    """
    Esta vista permite a las REST API poder retorna un Admin según su
    identificación.
    """
    try:
        User_admin = Admin.objects.get(id_user_restaurant = pk)
    except Admin.DoesNotExist:
        return Response({'answer':'No se encontró datos relacionados a esa identificación'})

    if request.method == 'GET':
        serializer = AdminSerializer(User_admin, many = False)
        return Response(serializer.data)


class UserRestaurantRegister(viewsets.ModelViewSet):
    """
    Esta vista permite a las REST API poder crear un UserRestaurant. 
    """
    queryset = UserRestaurant.objects.all()
    serializer_class = UserRestaurantSerializer

@api_view(['GET'])
def UserRestaurantList(request):
    """
    Esta vista permite a las REST API poder listar los UserRestaurant. 
    """
    User_restaurant = UserRestaurant.objects.filter(state_delete = False)
    if len(User_restaurant) != 0:
        serializer = UserRestaurantSerializer(User_restaurant, many = True)
        return Response(serializer.data)
    else:
        return Response({'answer':'No hay usuarios de restaurantes para listar'})

@api_view(['GET'])
def UserRestaurantDetail(request, pk):
    """
    Esta vista permite a las REST API poder retorna un UserRestaurant según su
    identificación.
    """
    try:
        User_restaurant = UserRestaurant.objects.get(document = pk)
    except UserRestaurant.DoesNotExist:
        return Response({'answer':'No se encontró datos relacionados a esa identificación'})

    if request.method == 'GET':
        serializer = UserRestaurantSerializer(User_restaurant, many = False)
        return Response(serializer.data)

@api_view(['DELETE',])
def UserRestaurantDelete(request, pk):
    """
    Esta vista permite a las REST API poder eliminar un UserRestaurant según su
    identificación, está eliminación se hace cambiando el estado.
    """
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
    """
    Esta vista permite a las REST API poder editar un UserRestaurant según su
    identificación.
    """
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

def document_search(par_username):
    """
    Está es una función que nos permite por medio del username del usuario 
    poder buscar su identificación.
    """
    User_django_l = User.objects.get(username = par_username)
    User_Restaurant_l = UserRestaurant.objects.get(user = User_django_l.id)
    return User_Restaurant_l.document

class ChangePasswordView(generics.UpdateAPIView):
    """
    Esta vista permite a las REST API poder editar la contraseña de un usuario
    """
    serializer_class = ChangePasswordSerializer
    model = User
    permission_classes = (IsAuthenticated,)

    def get_object(self, queryset=None):
        """
        Métodos propios de django, el cual te permite poder
        retornar los detalles que llegan en el request.
        """
        obj = self.request.user
        return obj

    def update(self, request, *args, **kwargs):
        """
        Método para actualizar la contraseña, todos los datos llegan en el request,
        en el request solo llegan el token que se genera al autenticarse.
        """
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
    """
    Esta vista permite a las REST API poder crear un usuario de Django.
    """
    serializer_class = RegisterUserSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        answer = existing_user(request.data['username'])
        if answer is True:
            return Response({"username": ["Ya existe un usuario con este nombre."]})
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
        "answer":"True",
        "id": user.id,
        "token": AuthToken.objects.create(user)[1]
        })

def existing_user(par_username):
    """
    Esta función permite verificar la existencia de un usuario en la bd, 
    está búsqueda la hace por medio de su usuario.
    """
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
    """
    Esta vista permite poder hacer el login de un usuario al sistema,
    está vista recibe un usuario y un username y una contraseña.
    """
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
