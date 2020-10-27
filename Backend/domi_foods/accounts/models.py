from django.db import models
from django.contrib.auth.models import User
from .validators import num_validation
from domi_foods import settings


# Create your models here.
class UserRestaurant(models.Model):
    DOCUMENTS_TYPE = [
        ('C.C', 'Cédula de ciudadanía'),
        ('T.I', 'Tarjeta de identificación'),
        ('Passport', 'Pasaporte'),
    ]
    GENRE = [
        ('M', 'Masculino'),
        ('F', 'Femenino'),
    ]
    user = models.OneToOneField(User, null=False, blank=False, on_delete=models.CASCADE, null=False, blank=False)
    document_type = models.CharField(choices=DOCUMENTS_TYPE, max_length=15)
    document = models.CharField(max_length=255, unique=True, primary_key=True, validators=[num_validation])
    first_name = models.CharField(max_length=255, null=False, blank=False)
    last_name = models.CharField(max_length=255, null=False, blank=False)
    genre = models.CharField(choices=GENRE, max_length=1)
    phone_num = models.CharField(max_length=255, null=False, blank=False, unique=True, validators=[num_validation])
    date_of_birth = models.DateField(null=True, blank=True)
    email_address = models.EmailField(max_length=255, null=False, blank=False, unique=True)
    address_location = models.CharField(max_length=255, null=False, blank=False, unique=True)
    state = models.CharField(max_length=255, null=False, blank=False, default='disponible')

    def __str__(self):
        return self.first_name


class Admin(models.Model):
    id_user_restaurant = models.OneToOneField(UserRestaurant, null=False, blank=False, on_delete=models.CASCADE)
    position_staff = models.CharField(max_length=255, default='Admin', null=False, blank=False)

    def __str__(self):
        return self.id_user_restaurant.first_name


class Client(models.Model):
    id_user_restaurant = models.OneToOneField(UserRestaurant, null=False, blank=False, on_delete=models.CASCADE)

    def __str__(self):
        return self.id_user_restaurant.first_name


class DeliveryMan(models.Model):
    VEHICLE_TYPE = [
        ('bicycle', 'bicycle / monocycle'),
        ('motorcycle', 'motorcycle'),
    ]
    id_client = models.OneToOneField(Client, null=False, blank=False, on_delete=models.CASCADE)
    type_of_vehicle = models.CharField(choices=VEHICLE_TYPE, max_length=10)
    vehicle_document = models.CharField(max_length=30, null=False, blank=False, unique=True)
    image = models.ImageField(upload_to='media_accounts/img_delivery_man', null=False, blank=False)

    def __str__(self):
        return self.id_client.id_user_restaurant.first_name
