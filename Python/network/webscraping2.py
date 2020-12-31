from bs4 import BeautifulSoup
import urllib.request, urllib.parse, urllib.error
import ssl

#ignore ssl certificate errors
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

url = input('Enter -')
handle = urllib.request.urlopen(url, context=ctx).read()
soup = BeautifulSoup(handle, 'html.parser')

tags = soup('span')
sum = 0
for tag in tags:
    sum +=  int(tag.contents[0])
print(sum)
