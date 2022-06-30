from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def login(request):
    return HttpResponse("Please login!")

def todo(request):
    return HttpResponse("Your To-do List..")
