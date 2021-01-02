import re
#
h = 'From shoukkiya59@gmail.com 24:12:30'
h2 = 'From shoukkiya.ashraf@speridian.com 22:45:23'
ans = re.findall('@(.+\..+)\s',h2)
ans2 = re.findall('@([^ ]*)',h)
print(ans2)
ans = re.findall('@(.+\..+)\s',h)
print(ans)

j = 'From stephen.marquard@uct.ac.za Sat Jan  5 09:14:16 2008'
an = re.findall('@(\S+)',j)
print(an)
