"""first URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
from django.urls import path
from learn.views import *  # new

urlpatterns = [
    url(r'^$', homepage), #new
    url(r'^register$', register),
    url(r'^login$', login),
    url(r'^moninfo$', moninfo),
    url(r'^user$', user),
    url(r'^platform$', platform),

    url(r'^admin/', admin.site.urls),

    path('QueryAccount', QueryAccount),
    path('AddAccount', AddAccount),
    path('LoginAccount', LoginAccount),
    path('AddBooking', AddBooking),    
    path('QueryBooking', QueryBooking),
    path('QueryAllBooking', QueryAllBooking),
    path('QueryBookingByCity', QueryBookingByCity),
]


