import requests

# Exercício 1 Faça uma requisiçãoao site
# https://httpbin.org/encoding/utf8
# e exiba seu conteúdo de forma legível.

BASE_URL = "https://httpbin.org/encoding/utf8"

response = requests.get(BASE_URL)
print(response.text)
