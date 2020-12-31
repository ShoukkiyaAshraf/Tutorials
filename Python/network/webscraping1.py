from bs4 import BeautifulSoup
import urllib.request, urllib.parse, urllib.error
import ssl

#ignore ssl certificate errors
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

url = input("Enter url : ")
handle = urllib.request.urlopen(url, context=ctx).read()
soup = BeautifulSoup(handle, 'html.parser')

tags = soup('a')
for tag in tags:
    print(tag.get('href',None))
