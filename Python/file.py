# Use the file name mbox-short.txt as the file name
fname = input("Enter file name: ")
fh = open(fname)
tot = 0
count = 0
for line in fh:
    line = line.rstrip()
    if not line.startswith("X-DSPAM-Confidence:") :
         continue
    else:
        count += 1
        start = line.find(':')
        start = start + 2
        num = line[start:]
        num = float(num)
        tot += num
avg = tot/count
print('Average spam confidence:',avg)
