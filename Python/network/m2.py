import urllib.request, urllib.parse, urllib.error
import re

count = dict()
fhand = urllib.request.urlopen('http://data.pr4e.org/romeo.txt')
for line in fhand:
    words = line.decode().split()
    for word in words:
        count[word] = count.get(word,0) + 1
print(count)

count = dict()
fhand = urllib.request.urlopen('http://www.dr-chuck.com/page1.htm')
for line in fhand:
    words = line.decode().split()
    w = " "
    w = w.join(words)
    link = re.findall('href=.(.+).>',str(words))
    if len(link) >= 1 :
        print(link)
