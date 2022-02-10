name = input('Digite um nome: ')[::-1]


def vertical_name(name):
    print(name[::-1])
    for char in name:
        print(name.split(char)[1][::-1])


vertical_name(name)
