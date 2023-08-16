from rest_framework import serializers

from countries.models import Country


class CountrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Country
        fields = ['id', 'code', 'name', 'created_at']


class CountryDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Country
        fields = [
            "code",
            "name",
            "created_at",
            "is_independent",
            "currency",
            "currency_symbol",
            "capital",
            "region",
            "area",
            "population",
            "flag"
]