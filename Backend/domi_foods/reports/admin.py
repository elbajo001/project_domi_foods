from django.contrib import admin
from .models import *


# Register your models here.
@admin.register(Report)
class ReportAdmin(admin.ModelAdmin):
    list_display = ['description',
                    'type_report', 'created_at', 'updated_at']
