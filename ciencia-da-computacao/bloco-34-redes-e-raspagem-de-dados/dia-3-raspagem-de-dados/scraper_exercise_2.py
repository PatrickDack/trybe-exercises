import requests

# Exercício 2 Faça uma requisição ao recurso usuários
#  da API do Github ( https://api.github.com/users ),]
# exibindo o username e url de todos os usuários
# retornados.

BASE_URL = "https://api.github.com/users"

response = requests.get(BASE_URL)
users = response.json()

for user in users:
    print(user["login"], user["url"])
