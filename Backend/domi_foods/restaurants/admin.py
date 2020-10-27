from django.contrib import admin
from .models import *


# Register your models here.
@admin.register(Restaurant)
class RestaurantAdmin(admin.ModelAdmin):
    list_display = ['id_admin', 'nit', 'name', 'address_location', 'phone_num', 'web_page', 'hours_start', 'hours_end', 'image',
                    'state', 'created_at', 'updated_at']


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['name', 'price', 'description', 'image', 'state', 'created_at', 'updated_at']


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'description', 'image', 'state', 'created_at', 'updated_at']
