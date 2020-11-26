from django.db import models
from accounts.models import Admin
from .validators import *
# Create your models here.
class Restaurant(models.Model):
    id_admin = models.ForeignKey(Admin, null=False, blank=False, on_delete=models.CASCADE)
    nit = models.CharField(max_length=255, null=False, blank=False, unique=True)
    name = models.CharField(max_length=255, null=False, blank=False, unique=True)
    address_location = models.CharField(max_length=255, null=False, blank=False, unique=True)
    phone_num = models.CharField(max_length=255, null=False, blank=False, unique=True, validators=[num_validation])
    web_page = models.URLField(max_length=255, null=True, blank=True, unique=True, validators=[url_validation])
    hours_start = models.TimeField(null=False, blank=False)
    hours_end = models.TimeField(null=False, blank=False)
    image = models.ImageField(upload_to='media_restaurants/img_restaurants', null=False, blank=False)
    state = models.CharField(max_length=255, null=False, blank=False, default='disponible')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'restaurant'
        verbose_name_plural = 'restaurants'

    def __str__(self):
        #return str(self.id)
        return self.name


class Category(models.Model):
    restaurant = models.ForeignKey(Restaurant,  on_delete=models.CASCADE,  null=False, blank=False, default=None)
    name = models.CharField(max_length=255, null=False, blank=False, unique=True)
    description = models.TextField(null=True, blank=True)
    type_executive = models.BooleanField(verbose_name='menú ejecutivo')
    image = models.ImageField(upload_to='media_restaurants/img_categories', null=False, blank=False)
    state = models.CharField(max_length=255, null=False, blank=False, default='disponible')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'category'
        verbose_name_plural = 'categories'

    def __str__(self):
        return self.name

class Product(models.Model):
    category = models.ForeignKey(Category, null=False, blank=False, on_delete=models.CASCADE, default=None)
    name = models.CharField(max_length=255, null=False, blank=False, unique=True)
    price = models.FloatField(max_length=10, null=False, blank=False)
    description = models.TextField(null=True, blank=True)
    image = models.ImageField(upload_to='media_restaurants/img_products', null=False, blank=False)
    state = models.CharField(max_length=255, null=False, blank=False, default='disponible')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'product'
        verbose_name_plural = 'products'
        #ordering = ['nombre']

    def __str__(self):
        return self.name


