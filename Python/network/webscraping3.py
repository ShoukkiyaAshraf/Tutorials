from bs4 import BeautifulSoup
import urllib.request, urllib.parse, urllib.error
import ssl

#ignore ssl certificate errors
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

url = input("Enter URL: ")
count = int(input('Enter count: '))
position = int(input('Enter position: '))

while(count >= 0):
    print('Retrieving: ',url)
    handle = urllib.request.urlopen(url, context=ctx).read()
    soup = BeautifulSoup(handle, 'html.parser')
    tags = soup('a')
    i = 0
    for t in tags:
        if i == position-1:
            tag = t
        i = i+ 1
    l = tag.get('href',None)
    url = l
    count = count - 1
