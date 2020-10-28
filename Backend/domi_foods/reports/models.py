from django.db import models

# Create your models here.


class Report(models.Model):
    description = models.TextField(null=False, blank=False)
    type_report = models.CharField(max_length=255, null=False, blank=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'report'
        verbose_name_plural = 'reports'
        #ordering = ['nombre']

    def __str__(self):
        return str(self.pk)
