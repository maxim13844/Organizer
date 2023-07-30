from django.http import HttpResponse

from codes.data import countries


def get_country_name(request):
    if 'code' not in request.GET:
        return HttpResponse('code param is required')
    code_input = request.GET['code'].upper()
    country = countries.get(code_input, 'Country not found')
    return HttpResponse(f'Code: {code_input} <br> Country: <b>{country}</b>')


'''def get_country_name(request):
    return HttpResponse("Hello, world. You're at the polls index.")'''
