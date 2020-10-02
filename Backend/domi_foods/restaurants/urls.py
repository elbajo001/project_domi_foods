from django.urls import path, include

urlpatterns = [
    path('api/', include('restaurants.api.urls'), name='api'),
]