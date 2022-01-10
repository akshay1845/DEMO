from django.db import models
from django.db.models.fields import NullBooleanField

# Create your models here.

class signup_data(models.Model):
    email=models.EmailField(default="", max_length=200)
    fname=models.CharField(default="", max_length=20)
    lname=models.CharField(default="", max_length=20)
    password=models.CharField(default="", max_length=200)
    gender=models.CharField(default="", max_length=10)
    address=models.TextField(default="")
    country=models.CharField(default="", max_length=20)
    state=models.CharField(default="", max_length=20)
    city=models.CharField(default="", max_length=10)
    zip=models.CharField(default="", max_length=10)
    join_date=models.DateField(auto_now=True,blank=True, null=True)
    def __str__(self):
        return self.email
