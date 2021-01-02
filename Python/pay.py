def computepay(h,r):
    if h >= 40:
        pay = (40 * r ) + ( (h-40) * r * 1.5 )
    else:
        pay = h * r
    return pay

hrs = input("Enter Hours:")
hrs = float(hrs)
rate = float(input("Enter Rate: "))
p = computepay(hrs,rate)
print("Pay",p)
