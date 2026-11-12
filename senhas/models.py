from django.db import models

class Senha(models.Model):
    senha = models.CharField(max_length=5)
    data_criacao = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=10, default='pendente')

    def __str__(self):
        return self.senha