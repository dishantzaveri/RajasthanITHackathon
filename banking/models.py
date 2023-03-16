from django.db import models
from accounts.models import User

class LoanProvider(models.Model):
    full_name = models.CharField(max_length=255)
    organization_type = models.CharField(max_length=255)
    scheme = models.CharField(max_length=255)

class Transaction(models.Model):
    provider = models.ForeignKey(LoanProvider, on_delete=models.CASCADE, related_name='provider')
    receiver = models.OneToOneField(User, on_delete=models.CASCADE)
    money = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.CharField(max_length=1000)