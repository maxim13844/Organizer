import requests

from countries.models import Country
from organizer.celery import app


@app.task(bind=True, ignore_result=True)
def fetch_country_data(self, name, *args, **kwargs):
    data = requests.get(f"https://restcountries.com/v3.1/name/{name}").json()[0]
    country = Country.objects.filter(name__icontains=name).first()
    country.is_independent = data["independent"]
    country.currency = list(data["currencies"].values())[0]["name"]
    country.currency_symbol = list(data["currencies"].values())[0]["symbol"]
    country.capital = data["capital"][0]
    country.region = data["region"]
    country.area = data["area"]
    country.population = data["population"]
    country.flag = data["flags"]["png"]
    country.save()
