name = input("Enter file:")
if len(name) < 1 : name = "mbox-short.txt"
handle = open(name)

#filtering the time(hr) from file
time = list()
words = list()
for line in handle:
    line = line.rstrip()
    if line.startswith('From '):
        words = line.split()[5]
        time.append(words[:2])

# finding the count of each time (hr)
hcount = dict()
for h in time:
    hcount[h] = hcount.get(h,0) + 1

# sorting out the hour count
hcount = sorted(hcount.items())
for h,c in hcount:
    print(h,c)
