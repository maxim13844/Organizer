from codes.data import countries
from codes.models import Country

def setup_country_codes():
    if Country.objects.count() == 0:
        for code, country in countries.items():
            Country.objects.create(code=code, name=country)