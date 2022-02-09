def total_pay(liter, fuel):
    if fuel == 'A':
        off = 0.03 if liter <= 20 else 0.05
        total = liter * 1.90
        total -= total * off

        print(total)

    if fuel == 'G':
        off = 0.04 if liter <= 20 else 0.06
        total = liter * 2.50
        total -= total * off

        print(total)


(total_pay(20, 'G'))
