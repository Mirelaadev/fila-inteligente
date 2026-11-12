from rest_framework import serializers
from senhas.models import Senha

class SenhaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Senha
        fields = '__all__'