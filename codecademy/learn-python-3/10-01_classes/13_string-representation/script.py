class Circle:
  pi = 3.14
  
  def __init__(self, diameter):
    self.radius = diameter / 2

  def __repr__(self):
    return "Circle with radius " + str(self.radius)
  
  def area(self):
    return self.pi * self.radius ** 2
  
  def circumference(self):
    return self.pi * 2 * self.radius
  
  
medium_pizza = Circle(12)
teaching_table = Circle(36)
round_room = Circle(11460)

print(medium_pizza)
print(teaching_table)
print(round_room)


# Example From Notes

# class Employee():
#   def __init__(self, name):
#     self.name = name

# argus = Employee("Argus Filch")
# print(argus)
# # prints "<__main__.Employee object at 0x104e88390>"


# Example From Notes

# class Employee():
#   def __init__(self, name):
#     self.name = name

#   def __repr__(self):
#     return self.name

# argus = Employee("Argus Filch")
# print(argus)
# # prints "Argus Filch"

