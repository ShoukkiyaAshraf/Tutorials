import urllib.request, urllib.parse, urllib.error
import json
import ssl

url = input("Enter location: ")

ct = ssl.create_default_context()
ct.check_hostname = False
ct.verify_mode = ssl.CERT_NONE

print("Retrieving ",url)
handle = urllib.request.urlopen(url,context = ct).read().decode()
print('Retrieved ',len(handle),' characters')
data = json.loads(handle)
data = data['comments']
sum = 0
for val in data:
    sum = sum + val['count']
print('Count:',len(data))
print('Sum:',sum)
