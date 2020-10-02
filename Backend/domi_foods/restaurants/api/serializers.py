from rest_framework import serializers
from ..models import *


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        # fields = ('id', 'name', 'price', 'description', 'image', 'category', 'date_creation', 'state_delete',
        # 'state_disponibility')
        fields = '__all__'


class RestaurantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        # fields = ('id', 'id_admin', 'nit', 'name', 'address_location', 'phone_num', 'web_page', 'hours', 'image',
        # 'date_creation', 'state_delete', 'state_disponibility')
        fields = "__all__"


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"
