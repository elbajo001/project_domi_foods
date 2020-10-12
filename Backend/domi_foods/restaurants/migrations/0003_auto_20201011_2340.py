# Generated by Django 3.1.2 on 2020-10-12 04:40

from django.db import migrations, models
import restaurants.validators


class Migration(migrations.Migration):

    dependencies = [
        ('restaurants', '0002_auto_20201003_1630'),
    ]

    operations = [
        migrations.AlterField(
            model_name='restaurant',
            name='web_page',
            field=models.URLField(blank=True, max_length=100, null=True, validators=[restaurants.validators.url_validation]),
        ),
    ]
