def bigger_name(list):
    bigger = ""
    for name in list:
        if len(name) > len(bigger):
            bigger = name

    print(bigger)


default_list = [
    "José",
    "Lucas",
    "Nádia",
    "Fernanda",
    "Cairo",
    "Joana",
]


bigger_name(default_list)
