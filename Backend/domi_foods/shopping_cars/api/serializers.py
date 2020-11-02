from abc import ABC
from rest_framework import serializers
from shopping_cars.models import Order

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'
