from django.contrib import admin
from django.urls import include, path
from django.views.generic import RedirectView

urlpatterns = [
    path("countries/", include("codes.urls")),
    path("admin/", admin.site.urls),
    path("", RedirectView.as_view(url='countries/', permanent=False), name='index')
]
