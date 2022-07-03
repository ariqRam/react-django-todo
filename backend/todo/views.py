from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.conf import settings

import os
import json


def login(request):
    """
    POST : Login
    """
    return HttpResponse("Please login!")


def todo(request):
    """
    GET : Return all the todo list of the logged user
    POST : Add a todo
    DELETE : Delete a set of todos
    """
    return HttpResponse("Your To-do List..")


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
