from abc import ABC
from rest_framework import serializers
from accounts.models import(
    UserRestaurant,
    Admin,
    Client,
    DeliveryMan,
) 
from django.contrib.auth.models import User


class ChangePasswordSerializer(serializers.Serializer):
    """
    Este método no permite convertir la petición de cambio de contraseña en 
    .json para que pueda viajar por medio de las REST AP.
    """
    model = User
    """
    Serializer for password change endpoint.
    """
    old_password = serializers.CharField(required=True)
    new_password = serializers.CharField(required=True)
class AdminSerializer(serializers.ModelSerializer):
    """
    Este método no permite convertir un Admin en .json para que pueda viajar por 
    medio de las REST AP.
    """
    class Meta:
        model = Admin
        fields = '__all__'

class ClientSerializer(serializers.ModelSerializer):
    """
    Este método no permite convertir un Client en .json para que pueda viajar por 
    medio de las REST AP.
    """
    class Meta:
        model = Client
        fields = '__all__'

class DeliveryManSerializer(serializers.ModelSerializer):
    """
    Este método no permite convertir un DeliveryMan en .json para que pueda viajar por 
    medio de las REST AP.
    """
    class Meta:
        model = DeliveryMan
        fields = '__all__'

class UserRestaurantSerializer(serializers.ModelSerializer):
    """
    Este método no permite convertir un UserRestaurant en .json para que pueda viajar por 
    medio de las REST AP.
    """
    class Meta:
        model = UserRestaurant
        fields = (
            'user',
            'document_type',
            'document',
            'first_name',
            'last_name',
            'genre',
            'phone_num',
            'date_of_birth',
            'email_address',
            'address_location'
        )

# User Serializer
class UserSerializer(serializers.ModelSerializer):
    """
    Este método no permite convertir un User en .json para que pueda viajar por 
    medio de las REST AP.
    """
    class Meta:
        model = User
        fields = ('id', 'username')

# Register Serializer
class RegisterUserSerializer(serializers.ModelSerializer):
    """
    Este método no permite convertir un User en .json para que pueda viajar por 
    medio de las REST AP.
    """
    password2 = serializers.CharField(style={'input_type': 'password'}, write_only=True)
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password', 'password2')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        password = self.validated_data['password']
        username = self.validated_data['username']
        email = self.validated_data['email']
        password2 = self.validated_data['password2']
        if password != password2:
            raise serializers.ValidationError({'answer': 'las contraseñas no coinciden.'})
        user = User.objects.create_user(username,email , validated_data['password'])
        return user

