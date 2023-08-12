import requests

from codes.models import Country

from django.shortcuts import render

from django.views import View


class CountryNameView(View):
    country_domain = 'http://country.io/names.json'

    def get(self, request):
        return render(request, "codes/search.html")

    def post(self, request):
        user_input = request.POST['code'].upper()
        country = Country.objects.filter(code=user_input).first()
        if not country:
            res = requests.get(self.country_domain)
            if country_name := res.json().get(user_input):
                country = Country.objects.create(code=user_input, name=country_name)
        return render(request, "codes/countries.html", {'country': country})

class CountryView(View):

    def get(self, request):
        if request.GET.get('countries') == 'list':
            countries = Country.objects.all()
            return render(request, "codes/countries-list.html", {'countries': countries})
        return render(request, "codes/countries.html")
