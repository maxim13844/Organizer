def county_name():
    import json
    f=open('countries.json')
    data=json.load(f)
    L=dict(data)
#print(L)
#f.close()
    a = input('Введите код страны: ')
    b=a.upper()
    if (L.get(b)):
        print(L.get(b))
    else:
        print('Сountry is not found')


county_name()




