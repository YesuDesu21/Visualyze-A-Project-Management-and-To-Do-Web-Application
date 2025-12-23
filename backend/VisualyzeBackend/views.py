from django.contrib.auth import authenticate, login
from django.db import IntegrityError
from django.http import JsonResponse
import requests

# Rest Framework Imports
from rest_framework.views import APIView 
from rest_framework.response import Response
from rest_framework import status 
import json

from .models import User
from .serializer import UserSerializer
        
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
            return JsonResponse({"message":"New account registered!"}, status = 201)
        except IntegrityError: 
            return {"status":"error","message":"Username already exists"}
        except Exception as e:
            print(f"An error has occured: {e}")
            return JsonResponse({"error": str(e)}, status=500)
        
class LoginView(APIView):
    def post(self, request):
        try:
            print("login view called")
            username = request.data.get('username')
            password = request.data.get('password')
            
            user = authenticate(request, username = username, password = password)
            
            if user is not None:
                login(request, user)
                return Response({
                    "message": "Login successful!",
                    "user_id": user.user_id,
                    "username": user.username
                    }, status=status.HTTP_200_OK)
            else:
                return Response({"error": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)
        except:
            return {'status':'error'}
            
            