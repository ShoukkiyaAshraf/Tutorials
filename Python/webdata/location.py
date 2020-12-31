import urllib.request, urllib.parse, urllib.error
import json

service_url = 'http://maps.googleapis.com/maps/api/geocode/json?'

address = input('Enter location - ')
url = service_url + urllib.parse.urlencode({'address':address})
uh = urllib.request.urlopen(url).read().decode()

try:
    data = json.loads(uh)
except:
    data = None
    print('Coudn\'nt load data')
print(data)
