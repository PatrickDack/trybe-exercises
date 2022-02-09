def triangle_type(a, b, c):
    if a + b < c:
        print('Impossivel montar um triângulo')
    elif a == b == c:
        print('Triângulo Equilátero')
    elif a == b or a == c or b == c:
        print('Triâgulo Isósceles')
    else:
        print('Triângulo Escaleno')


triangle_type(1, 2, 3)
