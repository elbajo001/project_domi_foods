from django.contrib import admin
from .models import *


# Register your models here.
@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ['client',
                    'state', 'created_at', 'updated_at']


@admin.register(Shipment)
class ShipmentAdmin(admin.ModelAdmin):
    list_display = ['delivery_man', 'order', 'hour_delivery', 'state', 'estimated_time',
                    'current_address', 'longitude', 'latitude', 'address_client', 'observation']


@admin.register(ShoppingCart)
class ShoppingCartAdmin(admin.ModelAdmin):
    list_display = ['order', 'product',
                    'quantity', 'total_price_product']


@admin.register(Bill)
class BillAdmin(admin.ModelAdmin):
    list_display = ['order',
                    'num_bill', 'total_to_pay', 'created_at', 'updated_at']
