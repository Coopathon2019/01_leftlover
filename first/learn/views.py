# Create your views here.


# coding:utf-8
from django.http import HttpResponse
from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import render
from django.http import FileResponse, JsonResponse
import matplotlib.pyplot as plt
import os, sys
import mpld3
import json
import numpy as np
import pandas as pd 
from datetime import datetime, date
from django.views.decorators.csrf import csrf_exempt
from .models import *



def index(request):
    return HttpResponse(u"欢迎光临 自强学堂!")


def homepage(request):
	a = "1"
	data = {a:1}
	return render(request, '首頁.html')



def register(request):
	return render(request, '註冊介面.html')

def login(request):
	return render(request, '登入頁面.html')


def moninfo(request):
	return render(request, '虻知識.html')


def user(request):
	return render(request, '用戶頁面.html')


def platform(request):
	return render(request, '平台.html')

	



@csrf_exempt
def QueryAccount(request):

    predata = AccountList.objects.all().order_by("AccountName")
    returnData = {}

    index = 0
    for i in predata:		
        returnData.update({
            index:{                
                "Name":i.AccountName,
                "Location":i.AccountLocation,
                "Phone":i.AccountPhone,
                "Mail":i.AccountMail,
            }            
        },)
        index += 1
    
    return JsonResponse(returnData)

@csrf_exempt
def AddAccount(request):

    AccountList.objects.create(AccountName = request.POST['paName'], AccountLocation = request.POST['paLocation'], AccountCity = request.POST['paCity'], AccountPhone = request.POST['paPhone'], AccountMail = request.POST['paMail'], AccountPassword = request.POST['paPassword'])
    print(request.POST)

    return JsonResponse({"status":"ok"})


@csrf_exempt
def LoginAccount(request):

    if(len(AccountList.objects.filter(AccountPhone = request.POST['paPhone'], AccountPassword = request.POST['paPassword'])) == 0):
        return JsonResponse({"status":"Error"})
    else:
        request.session["currentAccount"] = request.POST['paPhone']
        print(request.session["currentAccount"])

    return JsonResponse({"status":"ok"})

@csrf_exempt
def AddBooking(request):

    if(len(request.session["currentAccount"]) == 0):
        return JsonResponse({"status":"error"})
    else:
        referenceData = AccountList.objects.filter(AccountPhone = request.session["currentAccount"])
        
        BookingList.objects.create(BookingName = referenceData[0].AccountName, BookingLocation = referenceData[0].AccountLocation, BookingCity = referenceData[0].AccountCity, BookingPhone = referenceData[0].AccountPhone, BookingRemark = request.POST["paRemark"], BookingDate = str(date.today()), BookingQuantity = request.POST["paQuantity"])
    #print(request.POST)

    return JsonResponse({"status":"ok"})


@csrf_exempt
def QueryBooking(request):

    predata = BookingList.objects.filter(BookingPhone = request.session["currentAccount"])
    returnData = {}

    index = 0
    for i in predata:		
        returnData.update({
            index:{                
                "Date":i.BookingDate,
                "Quantity":i.BookingQuantity,
                "Remark":i.BookingRemark,
            }            
        },)
        index += 1
    
    print(returnData)
    return JsonResponse(returnData)


@csrf_exempt
def QueryBookingByCity(request):

    predata = BookingList.objects.filter(BookingCity = request.POST["paCity"]).order_by("BookingDate")
    returnData = {}

    index = 0
    for i in predata:		
        returnData.update({
            index:{                
                "Name":i.BookingName,
                "Date":i.BookingDate,
                "Location":i.BookingLocation,
                "Quantity":i.BookingQuantity,
                "Remark":i.BookingRemark,
            }            
        },)
        index += 1
    
    return JsonResponse(returnData)


@csrf_exempt
def QueryAllBooking(request):

    predata = BookingList.objects.all().order_by("BookingDate")
    returnData = {}

    index = 0
    for i in predata:		
        returnData.update({
            index:{                
                "Name":i.BookingName,
                "Date":i.BookingDate,
                "Location":i.BookingLocation,
                "Quantity":i.BookingQuantity,
                "Remark":i.BookingRemark,
            }            
        },)
        index += 1
    
    return JsonResponse(returnData)