# Generated by Django 3.2.7 on 2022-01-09 05:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('SignUp', '0002_signup_data_join_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='signup_data',
            name='city',
            field=models.CharField(default='', max_length=10),
        ),
        migrations.AlterField(
            model_name='signup_data',
            name='country',
            field=models.CharField(default='', max_length=20),
        ),
        migrations.AlterField(
            model_name='signup_data',
            name='gender',
            field=models.CharField(default='', max_length=10),
        ),
        migrations.AlterField(
            model_name='signup_data',
            name='state',
            field=models.CharField(default='', max_length=20),
        ),
        migrations.AlterField(
            model_name='signup_data',
            name='zip',
            field=models.CharField(default='', max_length=20),
        ),
    ]
