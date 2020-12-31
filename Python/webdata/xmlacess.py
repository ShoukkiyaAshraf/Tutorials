import xml.etree.ElementTree as ET

data = '''<stuff>
            <users>
            <user x="2">
                <id>001</id>
                <name>Chunk</name>
            </user>
            <user x="7">
                <id>009</id>
                <name>Brent</name>
            </user>
            </users>
          </stuff>
        '''


# print(tree.find('name').text)
# print(tree.find('email').get('hide'))

stuff = ET.fromstring(data)
ls = stuff.findall('users/user')
print('people Count : ',len(ls))
for i in ls:
    print(i.find('name').text)
    print(i.find('id').text)
    print(i.get("x"))
