from django.contrib.auth.models import User
from django.http import JsonResponse
from django.db import IntegrityError
from django.views.decorators.csrf import csrf_exempt 
from .models import *
from . serializer import *
import requests
import json
from rest_framework.views import APIView 
from rest_framework.response import Response

# Create your views here. mostly JSON API is used here
"""
Django views are a core component of the framework that handle the logic for how 
a web application responds to a user's request. They act as the "middleman" between the database
(models) and the user interface (templates), processing the request, fetching necessary data, and
returning an appropriate response. 
"""
        
def get_country_codes(request):
    url = 'https://restcountries.com/v3.1/all?fields=name,idd'
    
    response = requests.get(url)
    data = response.json()
    
    countries = []
    for item in data:
        root = item.get('idd', {}).get('root', '')
        suffixes = item.get('idd', {}).get('suffixes', [])
        
        if root and suffixes:
            code = f"{root}{suffixes[0]}"
            countries.append({
                "name": item['name']['common'],
                "code": code
            })
            
    countries.sort(key=lambda x: x['name'])
    return JsonResponse(countries, safe=False)

#@csrf_exempt    
class RegisterView(APIView):  
    def post(self, request):
        try:
            data = json.loads(request.body)
            
            user = User.objects().create_user(
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
            return JsonResponse({"message":"New account registered!"}, status = 201)
        except IntegrityError: 
            return {"status":"error","message":"Username already exists"}
        except Exception as e:
            print(f"An error has occured: {e}")
            return JsonResponse({"error": str(e)}, status=500)