# Fila Inteligente

API REST para gerenciamento de filas de atendimento, desenvolvida com **Django** e **Django REST Framework**.

O projeto simula uma fila de atendimento em um consultório médico, permitindo criar senhas e controlar o andamento dos atendimentos.

O projeto foi desenvolvido para fins acadêmicos e para praticar o desenvolvimento de APIs REST com Django.

## Funcionalidades

- Criação de senhas
- Listagem de senhas pendentes
- Chamada da próxima senha
- Conclusão de atendimentos
- Controle do status das senhas

## Tecnologias

- Python
- Django
- Django REST Framework
- SQLite

## Fluxo da senha

```text
Pendente → Chamada → Concluída
```

A fila segue a ordem de chegada: a senha criada primeiro é chamada primeiro.

## Endpoints

| Método | Endpoint | Descrição |
|---|---|---|
| POST | `/api/senhas/criar` | Cria uma nova senha |
| GET | `/api/senhas/pendentes` | Lista as senhas pendentes |
| PUT | `/api/senhas/chamar` | Chama a próxima senha |
| PUT | `/api/senhas/concluir` | Conclui o atendimento |

## Como executar

```bash
python manage.py migrate
python manage.py runserver
```

A API estará disponível em:

`http://127.0.0.1:8000/`