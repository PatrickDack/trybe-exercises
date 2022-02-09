from math import ceil


def budget(s_meter):
    liter = s_meter / 3
    tin = 1 if liter / 18 < 1 else ceil(liter / 18)
    total_price = tin * 80
    result = (tin, total_price)
    print(result)


budget(55)
