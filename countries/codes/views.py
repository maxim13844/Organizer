from django.http import HttpResponse

from codes.models import Country

from django.shortcuts import render


def get_country_name(request):
    if request.POST:
        country = Country.objects.filter(code=request.POST['code'].upper()).first()
        return render(request, "codes/index.html", {'country_key': country})
    return render(request, "codes/search.html")


def country_view(request):
    if request.GET.get('countries') == 'list':
        countries = Country.objects.all()
        return render(request, "codes/countries-list.html", {'countries': countries})
    return render(request, "codes/countries.html")




