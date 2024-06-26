# Generated by Django 3.2.12 on 2024-03-27 04:55

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('product', '0004_auto_20240327_0453'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='owner',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='user_products', to=settings.AUTH_USER_MODEL),
        ),
    ]
