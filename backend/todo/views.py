import json
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.conf import settings

import os

# Create your views here.


def login(request):
    return HttpResponse("Please login!")


def todo(request):
    return HttpResponse("Your To-do List..")


# this is a mockup endpoint
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
