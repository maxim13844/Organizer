from django.urls import path

from countries.views import CountryView, CountrySearchView, CountryDetailView

app_name = 'countries'

urlpatterns = [
    path("", CountryView.as_view(), name="countries"),
    path("<pk>", CountryDetailView.as_view(), name="countries"),
    path("search/<param>", CountrySearchView.as_view(), name="search-countries"),
]

