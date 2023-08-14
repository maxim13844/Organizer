import requests
from rest_framework.views import APIView
from rest_framework.response import Response
from countries.models import Country
from countries.serializers import CountrySerializer


class CountryView(APIView):
    def get(self, request):
        data = CountrySerializer(Country.objects.all(), many=True).data
        return Response(data)


class CountrySearchView(APIView):
    country_domain = 'http://country.io/names.json'

    def get(self, request, param):
        country = Country.objects.filter(code__icontains=param).first()
        if not country:
            res = requests.get(self.country_domain)
            if country_name := res.json().get(param.upper()):
                country = Country.objects.create(code=param, name=country_name)
        return Response(CountrySerializer(country).data if country else {})
