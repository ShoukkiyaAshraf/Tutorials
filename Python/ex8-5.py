fname = input("Enter file name: ")
if len(fname) < 1 : fname = "mbox-short.txt"

fh = open(fname)
count = 0
lis = list()
for line in fh:
    line = line.rstrip()
    if line.startswith('From '):
        words = line.split()
        count += 1
        lis.append(words[1])
for email in lis:
    print(email)
print("There were", count, "lines in the file with From as the first word")
