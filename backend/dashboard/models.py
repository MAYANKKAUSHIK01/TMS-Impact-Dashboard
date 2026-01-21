from django.db import models
from django.contrib.auth.models import User

class Volunteer(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    is_active = models.BooleanField(default=True)

class Donation(models.Model):
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    date = models.DateTimeField(auto_now_add=True)

class ActivityLog(models.Model):
    user_name = models.CharField(max_length=255)
    action_text = models.CharField(max_length=255)
    timestamp = models.DateTimeField(auto_now_add=True)