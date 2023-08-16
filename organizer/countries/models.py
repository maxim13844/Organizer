from django.db import models


class Country(models.Model):
    code = models.CharField(max_length=2)
    name = models.CharField(max_length=128)
    created_at = models.DateTimeField(auto_now_add=True)
    is_independent = models.BooleanField(null=True)
    currency = models.CharField(max_length=64, null=True)
    currency_symbol = models.CharField(max_length=64, null=True)
    capital = models.CharField(max_length=128, null=True)
    region = models.CharField(max_length=128, null=True)
    area = models.CharField(max_length=128, null=True)
    population = models.CharField(max_length=128, null=True)
    flag = models.CharField(max_length=128, null=True)

    def __str__(self):
        return self.name
