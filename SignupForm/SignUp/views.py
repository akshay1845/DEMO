from django.db.models.fields import NullBooleanField
from django.shortcuts import redirect, render
from django import http
from django.http.response import HttpResponse
from django.contrib import messages
import sys
from SignUp.models import signup_data


# Create your views here.

def signup(request):
    #Storing data in variables
    if request.POST:
        email = request.POST['email']      #var_name = request.POST[name='']
        fname = request.POST['fname']
        lname = request.POST['lname']
        password = request.POST['password']
        gender = request.POST['gender']
        address = request.POST['address']
        country = request.POST['country']
        state = request.POST['state']
        city = request.POST['city']
        zip = request.POST['zip']

        #All the fields are required
        if len(email)==0 or len(fname)==0 or len(lname)==0 or len(password)==0 or len(gender)==0 or len(address)==0 or len(country)==0 or len(city)==0 or len(state)==0:
            messages.warning(request, "Please Enter all the fields before submitting!!!")
            return redirect('signup')
        
        else:
            #Checking Existenece of email
            try:
                var = signup_data.objects.get(email= email)
                return render(request, "email.html")
           
            #Storing data in database using object
            except:
                obj = signup_data()
                obj.email = email       #obj.(name in database) = var_name
                obj.fname = fname
                obj.lname = lname
                obj.password = password
                obj.gender = gender
                obj.address = address
                obj.country = country
                obj.state = state
                obj.city = city
                obj.zip = zip

                obj.save()
                messages.success(request, "Data inserted successfully",)
                return redirect('signup') 
                

    return render(request,"form.html")
