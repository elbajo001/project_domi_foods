from django.urls import path, include

urlpatterns = [
    path('api/', include('shopping_cars.api.urls'), name='api'),
]
