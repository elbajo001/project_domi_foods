from django.contrib import admin
from .models import *


# Register your models here.
@admin.register(UserRestaurant)
class UserRestaurantAdmin(admin.ModelAdmin):
    list_display = ['document_type', 'document', 'first_name', 'last_name', 'phone_num', 'email_address',
        'address_location', 'state_delete', 'state_disponibility']
    # list_display = '__all__'

@admin.register(Admin)
class AdminAdmin(admin.ModelAdmin):
    list_display = ['id_user_restaurant', 'position_staff']
    # list_display = '__all__'

@admin.register(Client)
class ClientAdmin(admin.ModelAdmin):
    list_display = ['id_user_restaurant']
    # list_display = '__all__'

@admin.register(DeliveryMan)
class DeliveryManAdmin(admin.ModelAdmin):
    list_display = ['image', 'id_client', 'vehicle_document']
    # list_display = '__all__'
