from django.urls import path

from codes.views import CountryNameView, CountryView

app_name = 'countries'

urlpatterns = [
    path("codes", CountryNameView.as_view(), name="get_country_name"),
    path("", CountryView.as_view(), name="country_view"),
]
