import json

data = '''
            [
            {"id":1,
             "x" : 2,
             "name":"shoukki"
                },
            {
            "id":2,
             "x" : 7,
             "name":"vasu"
            }
            ]
        '''

ex = json.loads(data)
length = len(ex)
for i in ex:
    print("ID :",i["id"])
    print("NAME :",i["name"])
    print("x :",i["x"])

data2 = '''
        {
        "name" : "Shoukki",
        "phone": {
            "type" :  "intl",
            "number" : "+1 734 3030 4456"
                },
        "email" : {
            "hide" : "yes"
                }
        }
        '''
info = json.loads(data2)
print("Name: ",info["name"])
print("email - Hide : ",info["email"]["hide"])
