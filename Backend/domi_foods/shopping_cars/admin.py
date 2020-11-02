from django.contrib import admin
from .models import *


admin.site.register(Order)
admin.site.register(ShoppingCart)
"""
@admin.register(Shipment)
class ShipmentAdmin(admin.ModelAdmin):
    list_display = ['delivery_man', 'order', 'hour_delivery', 'state', 'estimated_time',
                    'current_address', 'longitude', 'latitude', 'address_client', 'observation']

@admin.register(Bill)
class BillAdmin(admin.ModelAdmin):
    list_display = ['order',
                    'num_bill', 'total_to_pay', 'created_at', 'updated_at']
"""
