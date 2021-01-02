fname = input("Enter file name: ")
fh = open(fname)
lst = list()
for line in fh:
    line = line.rstrip()
    ch = line.split()
    for i in ch:
        if i not in lst:
            lst.append(i)
        else:
            continue
print(sorted(lst))
