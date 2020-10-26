from abc import ABC
from rest_framework import serializers
from accounts.models import UserRestaurant
from django.contrib.auth.models import User


class ChangePasswordSerializer(serializers.Serializer):
    model = User
    """
    Serializer for password change endpoint.
    """
    old_password = serializers.CharField(required=True)
    new_password = serializers.CharField(required=True)


class UserRestaurantSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserRestaurant
        fields = '__all__'


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
        user = User.objects.create_user(username, email, validated_data['password'])
        return user
