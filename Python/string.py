small = None
Great = None
while True:
    num = input("Enter value ")
    if num == 'done':
        break
    else:
        try:
            num = int(num)
        except:
            print("Invalid Input")
            continue
        if small is None:
            small = num
        elif small < num :
            small = num
        if Great is None:
            Great = num
        elif Great > num :
            Great = num
print(small)
print(Great)
