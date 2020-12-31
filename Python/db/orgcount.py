import sqlite3
import re

conn = sqlite3.connect('orgdb.sqlite')
cur = conn.cursor()

cur.execute('''DROP TABLE IF EXISTS Counts''')

cur.execute('''CREATE TABLE Counts (org TEXT, count INTEGER)''')

fname = input('Enter file name:  ')
if len(fname)<1:
    fname = 'mbox.txt'

fhandle = open(fname)


for line in fhandle:
    if not line.startswith('From:'):
        continue
    email = line.split()[1]
    org = email.split('@')[1]
    cur.execute('''SELECT count FROM Counts WHERE org = ? ''',(org,))
    stat = cur.fetchone()
    if stat is None:
        cur.execute(''' INSERT INTO Counts (org,count) VALUES (?,1)''',(org,))
    else:
        cur.execute(''' UPDATE Counts SET count = count + 1 WHERE org = ? ''',(org,))

conn.commit()

sqlstr = 'SELECT org,count FROM Counts ORDER BY count DESC LIMIT 10'

for row in cur.execute(sqlstr):
    print(str(row[0]), row[1])

cur.close()
