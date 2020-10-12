from rest_framework import serializers
from ..models import *


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        # fields = ('id', 'name', 'price', 'description', 'image', 'category', 'date_creation', 'state_delete',
        # 'state_disponibility')
        fields = '__all__'


class RestaurantSerializer(serializers.ModelSerializer):
    Restaurant.categories = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    class Meta:
        model = Restaurant
        # fields = ('id', 'id_admin', 'nit', 'name', 'address_location', 'phone_num', 'web_page', 'hours', 'image',
        # 'date_creation', 'state_delete', 'state_disponibility')
        fields = "__all__"

        def validate_url(self, url):
            if not 'http://' in url and not 'https://' in url:
                url = 'http://' + url
            url_validate = URLValidator()
            try:
                url_validate(url)
            except:
                raise serializers.ValidationError("xD")
            return url


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"
