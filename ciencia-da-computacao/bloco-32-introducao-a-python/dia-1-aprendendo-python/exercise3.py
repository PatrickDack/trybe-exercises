def n_side_square(n):
    count = 1

    while count <= n:
        if n > 1:
            count += 1
            print(n * '*')


print(n_side_square(10))
