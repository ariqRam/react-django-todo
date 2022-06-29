from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
def my_api_view(request):
    return HttpResponse('Hello client!')