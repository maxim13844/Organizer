from django.db import models


class Country(models.Model):
    code = models.CharField(max_length=2)
    name = models.CharField(max_length=128)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name