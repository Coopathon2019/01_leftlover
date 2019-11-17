from django.db import models
from datetime import datetime

# Create your models here.

class AccountList(models.Model):
    AccountName = models.CharField(max_length = 30)
    AccountCity = models.CharField(max_length = 30)
    AccountLocation = models.CharField(max_length = 30)
    AccountPhone = models.CharField(max_length = 10)
    AccountMail = models.CharField(max_length = 30)
    AccountPassword = models.CharField(max_length = 20)


    def __str__(self):
        return self.AccountName

class BookingList(models.Model):
    BookingPhone = models.CharField(max_length = 10)
    BookingName = models.CharField(max_length = 30)
    BookingLocation = models.CharField(max_length = 30)
    BookingCity = models.CharField(max_length = 30)
    BookingDate = models.CharField(max_length = 30)
    BookingQuantity = models.IntegerField()
    BookingRemark = models.CharField(max_length = 30)

    def __str__(self):
        return self.BookingName
