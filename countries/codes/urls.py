from django.urls import path

from . import views

urlpatterns = [
    path("codes", views.get_country_name, name="get_country_name"),
    path("", views.country_view, name="country_view"),
]