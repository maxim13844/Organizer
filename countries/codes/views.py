from django.http import HttpResponse

from codes.models import Country

from django.shortcuts import render

def get_country_name(request):
    if 'code' not in request.GET:
        return HttpResponse('code param is required')
    code_input = request.GET['code'].upper()
    country = Country.objects.filter(code=code_input).first()
    return render(request, "codes/index.html", {'country_key': country})





