name = input("Enter file:")
if len(name) < 1 : name = "mbox-short.txt"
handle = open(name)
email_list = list()
for line in handle:
    line = line.rstrip()
    if line.startswith('From '):
        words = line.split()
        email_list.append(words[1])
    else:
        continue

#counting the email_list
email_dic = dict()
for email in email_list:
    email_dic[email] = email_dic.get(email,0) + 1


#finding greatest number of emails from which sender
count = None
for sender in email_dic:
    if count is None:
        g_sender = sender
        count = email_dic[sender]
    elif email_dic[sender] > count :
        g_sender = sender
        count = email_dic[sender]
print(g_sender,count)
