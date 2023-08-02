from django.http import HttpResponse

from codes.models import Country


'''def get_country_name(request):
    if 'code' not in request.GET:
        return HttpResponse('code param is required')
    code_input = request.GET['code'].upper()
    country = Country.objects.filter(code=code_input).first()
    if country:
        country_name = country.name
    else:
        country_name = 'Country not found'
    return HttpResponse(f'Code: {code_input} <br> Country: <b>{country_name}</b>')'''


def get_country_name(request):
    if 'code' not in request.GET:
        return HttpResponse('code param is required')
    code_input = request.GET['code'].upper()
    return HttpResponse(Country.objects.filter(code=code_input).first() or 'Country not found')




