from django.contrib import messages
from django.shortcuts import render, redirect, HttpResponse
from django.contrib.auth.models import User, auth

# Create your views here.

def home(request):
    return HttpResponse("home page")

def todo(request):
    return HttpResponse("todo page")


def signup(request):
    if request.method == 'POST':
        first_name = request.POST['first_name']
        last_name = request.POST['last_name']
        username = request.POST['username']
        email = request.POST['email']
        password = request.POST['password']
        confirm_password = request.POST['confirm_password']

        if password==confirm_password:
            if User.objects.filter(username=username).exists():
                messages.info(request, 'Username is already taken')
                return redirect("signup")
            elif User.objects.filter(email=email).exists():
                messages.info(request, 'Email is already taken')
                return redirect("signup")
            else:
                user = User.objects.create_user(username=username, password=password, 
                                        email=email, first_name=first_name, last_name=last_name)
                user.save()
                
                return redirect("login")


        else:
            messages.info(request, 'Both passwords are not matching')
            return redirect("signup")

    else:
        return render(request, "signup.html")


def login(request):
    return HttpResponse("login page")

def logout(request):
    return HttpResponse("logged out")
