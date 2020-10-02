from django.contrib import admin
from .models import *


# Register your models here.
@admin.register(Restaurant)
class RestaurantAdmin(admin.ModelAdmin):
    list_display = ['id_admin', 'nit', 'name', 'address_location', 'phone_num', 'web_page', 'hours', 'image',
                    'date_creation', 'state_delete', 'state_disponibility']


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['name', 'price', 'description', 'image', 'date_creation', 'state_delete', 'state_disponibility']


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'description', 'date_creation', 'state_delete']
