def arithmetic_mean(list):
    total = 0
    for num in list:
        total += num

    list_length = len(list)

    return total / list_length


default_list = [1, 3, 6, 7, 12]


print(arithmetic_mean(default_list))
