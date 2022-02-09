def small_number(list):
    i = float("inf")
    for num in list:
        if num < i:
            i = num
    return i


default_list = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]

print(small_number(default_list))
