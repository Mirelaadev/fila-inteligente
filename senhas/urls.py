from django.urls import path

from senhas.views import (
    criar_senha,
    chamar_senha,
    listar_senhas_pendentes,
    concluir_senha,
    listar
)
urlpatterns = [
    path('api/senhas/criar', criar_senha, name='criar_senha'),
    path('api/senhas/chamar', chamar_senha, name='chamar_senha'),
    path('api/senhas/pendentes', listar_senhas_pendentes, name='listar_senhas_pendentes'),
    path('api/senhas/concluir', concluir_senha, name='concluir_senha'),
    path('api/senhas/listar', listar, name='listar'),

]