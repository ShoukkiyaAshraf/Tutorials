class PartyAnimal(object):
    """docstring for PartyAnimal."""
    x = 0
    name = ""
    def __init__(self,nam):
        self.name = nam
        print(self.name,'Constructed')
    def party(self):
        self.x = self.x + 1
        print("So far for ",self.name,':',self.x)

class FootballFan(PartyAnimal):
    points = 0
    def touch_down(self):
        self.points = self.points + 7
        self.party()
        print('Points ',self.name,":",self.points)

j = FootballFan("Jim")
j.touch_down()
j.party()
