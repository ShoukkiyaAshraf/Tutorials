import urllib.request, urllib.parse, urllib.error
import ssl
import xml.etree.ElementTree as ET

url = input("Enter location: ")

ct = ssl.create_default_context()
ct.check_hostname = False
ct.verify_mode = ssl.CERT_NONE
print("Retrieving ",url)
handle = urllib.request.urlopen(url,context = ct).read().decode()

# creating xml tree
tree = ET.fromstring(handle)
print("Retrieved {0} characters".format(len(handle)))
data_list = tree.findall("comments/comment")
sum = 0
for data in data_list:
    sum = sum + int(data.find('count').text)
print("Count:",len(data_list))
print("Sum:",sum)
