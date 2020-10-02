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
    model = User
    """
    Serializer for password change endpoint.
    """
    old_password = serializers.CharField(required=True)
    new_password = serializers.CharField(required=True)
class AdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = Admin
        fields = '__all__'

class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = '__all__'

class Delivey_manSerializer(serializers.ModelSerializer):
    class Meta:
        model = DeliveryMan
        fields = '__all__'

class UserRestaurantSerializer(serializers.ModelSerializer):
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
    class Meta:
        model = User
        fields = ('id', 'username')

# Register Serializer
class RegisterUserSerializer(serializers.ModelSerializer):

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

