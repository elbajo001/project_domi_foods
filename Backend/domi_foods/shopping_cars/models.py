from django.db import models
from restaurants.models import *
from accounts.models import *
from reports.models import *

# Create your models here.


class Order(models.Model):
    client = models.ForeignKey(
        Client, on_delete=models.CASCADE,  null=False, blank=False)
    total_to_pay = models.FloatField(max_length=15, null=False, blank=False, default=0)
    estimated_time = models.FloatField(max_length=15, null=True, blank=True)
    current_address = models.CharField(max_length=255, null=True, blank=True)
    longitude = models.FloatField(max_length=15, null=True, blank=True)
    latitude = models.FloatField(max_length=15, null=True, blank=True)
    observation = models.TextField(null=True, blank=True)
    state = models.CharField(max_length=255, null=False,
                             blank=False, default='en espera')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'order'
        verbose_name_plural = 'orders'
        #ordering = ['nombre']

    def __str__(self):
        return str(self.pk)


class Shipment(models.Model):
    delivery_man = models.ForeignKey(
        DeliveryMan, on_delete=models.CASCADE,  null=False, blank=False)
    order = models.OneToOneField(
        Order, on_delete=models.CASCADE, primary_key=True,)
    hour_delivery = models.TimeField(null=False, blank=False)
    state = models.CharField(max_length=255, null=False,
                             blank=False, default='no entregado')

    class Meta:
        verbose_name = 'shipment'
        verbose_name_plural = 'shipments'
        #ordering = ['nombre']

    def __str__(self):
        return str(self.pk)


class ShoppingCart(models.Model):
    order = models.ForeignKey(
        Order, on_delete=models.CASCADE,  null=False, blank=False)
    product = models.ForeignKey(
        Product, on_delete=models.CASCADE,  null=False, blank=False)
    quantity = models.PositiveIntegerField(null=False, blank=False, default=0)
    total_price_product = models.FloatField(
        null=False, blank=False, default=0.0)

    class Meta:
        verbose_name = 'shopping cart'
        verbose_name_plural = 'shopping carts'
        #ordering = ['nombre']

    def __str__(self):
        return str(self.pk)


class Bill(models.Model):
    order = models.OneToOneField(
        Order, on_delete=models.CASCADE, primary_key=True,)
    report = models.ForeignKey(
        Report, on_delete=models.CASCADE,  null=False, blank=False)
    num_bill = models.CharField(max_length=255, null=False, blank=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'bill'
        verbose_name_plural = 'bills'
        #ordering = ['nombre']

    def __str__(self):
        return str(self.total_to_pay)
