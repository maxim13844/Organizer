import requests
from rest_framework.views import APIView
from rest_framework.response import Response
from countries.models import Country
from countries.serializers import CountrySerializer, CountryDetailSerializer
from countries.tasks import fetch_country_data


class CountryView(APIView):
    def get(self, request):
        data = CountrySerializer(Country.objects.all().order_by('name'), many=True).data
        fetch_country_data.delay('ukraine')
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


class CountryDetailView(APIView):
    def get(self, request, pk):
        country = Country.objects.filter(pk=pk).first()
        if not country.flag:
            fetch_country_data.delay(country.name.lower())
            return Response({})
        return Response(CountryDetailSerializer(country).data)
