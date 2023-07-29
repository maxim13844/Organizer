import json


def get_country_name():
    countries_json = open('countries.json')
    countries_data = json.load(countries_json)
    user_input = input('Введите код страны: ').upper()
    print(countries_data.get(user_input, 'Country is not found'))
    countries_json.close()


get_country_name()




