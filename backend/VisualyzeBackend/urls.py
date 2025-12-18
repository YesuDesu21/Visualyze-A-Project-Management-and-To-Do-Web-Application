from django.urls import path
from . import views

#syntax path(route, view, kwargs, name)
urlpatterns=[
    #path('login/',),
    path('register/', views.register_view, name='register'),
    # path('task/',views.),
    # path('projects/',views.),
    # path('itinerary/',views.),
    # path('settings/',views.),
]