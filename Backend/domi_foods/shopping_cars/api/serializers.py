from abc import ABC
from rest_framework import serializers
from shopping_cars.models import Order, ShoppingCart


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'


class OrderProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShoppingCart
        fields = '__all__'

    # ways to validate
    # #1
    def validate_quantity(self, value):
        if value <= 0:
            raise serializers.ValidationError(
                "Please, enter a positive quantity")
        return value

    def validate_total_price_product(self, value):
        if value <= 0:
            raise serializers.ValidationError(
                "Please, enter a positive total price")
        return value

    # #2
    def validate(self, data):
        if data['quantity'] <= 0 and data['total_price_product'] <= 0:
            raise serializers.ValidationError(
                "Please, enter a positive value")
        return data
