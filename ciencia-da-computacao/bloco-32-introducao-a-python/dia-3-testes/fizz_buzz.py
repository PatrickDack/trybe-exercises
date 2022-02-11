def fizz_buzz(n):
    fizz_buzz_arr = []
    for num in range(1, n + 1):
        if num % 3 == 0 and num % 5 == 0:
            fizz_buzz_arr.append('FizzBuzz')
        elif num % 5 == 0:
            fizz_buzz_arr.append('Buzz')
        elif num % 3 == 0:
            fizz_buzz_arr.append('Fizz')
        else:
            fizz_buzz_arr.append(num)
    print(fizz_buzz_arr)
    return fizz_buzz_arr
