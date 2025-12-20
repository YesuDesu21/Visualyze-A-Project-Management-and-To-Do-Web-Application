from django.urls import path
from . import views

#syntax path(route, view, kwargs, name)
#name
urlpatterns=[
    path('api/countries/', views.get_country_codes, name='get_countries'),
    path('register/', views.RegisterView.as_view(), name='register'),
    path('login/', views.LoginView.as_view(), name='login'),
    # path('task/',views.),
    # path('projects/',views.),
    # path('itinerary/',views.),
    # path('settings/',views.),
]