class PartyAnimal(object):
    """docstring for PartyAnimal."""
    x = 0
    def __init__(self):
        print('Constructed')
    def party(self):
        self.x = self.x + 1
        print("So far ",self.x)
    def __del__(self):
        print('Destructed')
print('-------------------')
p1 = PartyAnimal()
print('-------------------')
p1.party()
p1.party()
p1.party()
p1.party()
print('-------------------')
print('-------------------')
p1 = 2
print('-------------------')
print(type(p1))
print('-------------------')
print(dir(p1))
