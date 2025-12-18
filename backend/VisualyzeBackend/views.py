#from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django.http import JsonResponse
from django.db import IntegrityError
from django.views.decorators.csrf import csrf_exempt 
import json

# Create your views here. mostly JSON API is used here
"""
Django views are a core component of the framework that handle the logic for how 
a web application responds to a user's request. They act as the "middleman" between the database
(models) and the user interface (templates), processing the request, fetching necessary data, and
returning an appropriate response. 
"""

@csrf_exempt
def register_view(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            
            user = User.objects.create_user(
                #user id is handled in model
                first_name = data['first_name'],
                last_name = data['last_name'],
                username = data['username'],
                email = data['email'],
                password = data['password'],
                country_code = data['country_code'],
                phone_number = data['phone_number'],
                birth_date = data['birth_date'],
                accept_term = data['accept_term'],
            )
        except IntegrityError: 
            return {"status":"error","message":"Username already exists"}
        except Exception as e:
            print(f"An error has occured: {e}")
        else: return JsonResponse({"message":"Success!"}, status = 201)
        
        
# def login_view(request):
#     pass
    