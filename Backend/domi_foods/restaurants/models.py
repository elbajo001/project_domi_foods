from django.db import models
from accounts.models import Admin


# Create your models here.
class Restaurant(models.Model):
    id_admin = models.ForeignKey(Admin, null=False, blank=False, on_delete=models.CASCADE)
    nit = models.IntegerField(null=False, blank=False, unique=True)
    name = models.CharField(max_length=20, null=False, blank=False)
    address_location = models.CharField(max_length=40, null=False, blank=False)
    phone_num = models.IntegerField(null=False, blank=False, unique=True)
    web_page = models.URLField(max_length=100, null=True, blank=True)
    hours = models.CharField(max_length=25, null=True, blank=True)
    image = models.ImageField(upload_to='media_restaurants/img_restaurants', null=False, blank=False)
    date_creation = models.DateField(auto_now=True, auto_now_add=False)
    state_delete = models.BooleanField(default=False)
    state_disponibility = models.BooleanField(default=False)

    class Meta:
        verbose_name = 'restaurant'
        verbose_name_plural = 'restaurants'

    def __str__(self):
        #return str(self.id)
        return self.name


class Category(models.Model):
    name = models.CharField(max_length=25, null=False, blank=False)
    description = models.TextField()
    image = models.ImageField(upload_to='media_restaurants/img_categories', null=False, blank=False)
    restaurant = models.ManyToManyField(Restaurant)
    date_creation = models.DateField(auto_now=True, auto_now_add=False)
    state_delete = models.BooleanField(default=False)

    class Meta:
        verbose_name = 'category'
        verbose_name_plural = 'categories'

    def __str__(self):
        return self.name

class Product(models.Model):
    name = models.CharField(max_length=20, null=False, blank=False)
    price = models.IntegerField(null=False, blank=False)
    description = models.CharField(max_length=255)
    image = models.ImageField(upload_to='media_restaurants/img_products', null=False, blank=False)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, default=None)
    date_creation = models.DateField(auto_now=True, auto_now_add=False)
    state_delete = models.BooleanField(default=False)
    state_disponibility = models.BooleanField(default=False)

    class Meta:
        verbose_name = 'product'
        verbose_name_plural = 'products'
        #ordering = ['nombre']

    def __str__(self):
        return self.name

