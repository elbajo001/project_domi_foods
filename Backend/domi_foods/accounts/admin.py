from django.contrib import admin
from .models import *


# Register your models here.
@admin.register(UserRestaurant)
class UserRestaurantAdmin(admin.ModelAdmin):
    list_display = ['user', 'document_type', 'document', 'first_name', 'last_name', 'phone_num', 'date_of_birth', 'email_address',
        'address_location', 'state']
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
    list_display = ['id_client', 'vehicle_document', 'image']
    # list_display = '__all__'
