# Generated by Django 2.1.7 on 2019-11-16 15:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('learn', '0003_auto_20191116_2250'),
    ]

    operations = [
        migrations.AddField(
            model_name='accountlist',
            name='AccountCity',
            field=models.CharField(default='-', max_length=30),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='bookinglist',
            name='BookingCity',
            field=models.CharField(default='-', max_length=30),
            preserve_default=False,
        ),
    ]
