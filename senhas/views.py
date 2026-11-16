from rest_framework.response import Response

from senhas.models import Senha
from senhas.serializers import SenhaSerializer
from rest_framework.decorators import api_view

@api_view(['POST'])
def criar_senha(request):
    ultima_senha = Senha.objects.last()

    if ultima_senha is None:
        nova_senha = Senha.objects.create(
            senha = 'A001'
        )
    else:
        numero = int(ultima_senha.senha[1:])
        numero += 1

        nova_senha = Senha.objects.create(
            senha=f'A{numero:03d}'
        )

    return Response({'senha': nova_senha.senha})

@api_view(['PUT'])
def chamar_senha(request):
    senha = Senha.objects.filter(status = 'pendente').first()

    if senha is None:
        return Response({
            'mensagem': 'Não há senhas pendentes'
        })

    senha.status = 'chamada'
    senha.save()

    return Response({
        'senha': senha.senha,
        'status': senha.status
    })

@api_view(['GET'])
def listar_senhas_pendentes(request):
    senhas = Senha.objects.filter(status = 'pendente')
    serializer = SenhaSerializer(senhas, many=True)

    return Response(serializer.data)

@api_view(['GET'])
def listar_senhas_chamadas(request):
    senhas = Senha.objects.filter(status = 'chamada')
    serializer = SenhaSerializer(senhas, many=True)

    return Response(serializer.data)

@api_view(['PUT'])
def concluir_senha(request):
    senha = Senha.objects.filter(senha=request.data['senha'], status='chamada').first()

    if senha is None:
        return Response({
            'mensagem': 'Não há senhas chamadas'
        })

    senha.status = 'concluída'
    senha.save()

    return Response({
        'senha': senha.senha,
        'status': senha.status
    })

@api_view(['GET'])
def listar(request):
    senhas = Senha.objects.all()
    serializer = SenhaSerializer(senhas, many=True)

    return Response(serializer.data)







