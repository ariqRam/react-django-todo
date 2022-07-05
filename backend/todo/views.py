import os
import json

from django.views.decorators.csrf import csrf_exempt
from django.conf import settings

from django.contrib import messages
from django.shortcuts import render, redirect, HttpResponse
from django.contrib.auth.models import User, auth

from rest_framework import viewsets
from .serializers import TodoSerializer
from .models import ToDo



def home(request):
    return render(request, "home.html")


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
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']

        user = auth.authenticate(username=username, password=password)

        if user is not None:
            auth.login(request, user)
            return redirect('home')
        else:
            messages.info(request, 'Invalid Username or Password')
            return redirect('login')

    else:
        return render(request, 'login.html')


def logout(request):
    return HttpResponse("logged out")


# this is a mockup endpoint to be deleted in production
@csrf_exempt
def save_todo(request):
    """
    TODO
    > Learn about CSRF
    > Ensure security in between API calls with CSRF
    """
    mockup_db = open(os.path.join(os.path.dirname(settings.BASE_DIR),
                     "frontend/src/static/mockupDb.json"), "w")

    content = request.body.decode('utf-8')
    body = json.loads(content)
    print(body)

    with mockup_db as f:
        json.dump(body, f)

    return HttpResponse(content, "is saved")


class TodoView(viewsets.ModelViewSet):
    serializer_class = TodoSerializer
    queryset = ToDo.objects.all()
