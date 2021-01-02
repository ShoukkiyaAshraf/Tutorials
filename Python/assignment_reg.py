import re
handle = open('actual.txt')
data = handle.read()
num = re.findall('[0-9]+',data)
num = [int(i) for i in num]
total = sum(num)
print(total)
