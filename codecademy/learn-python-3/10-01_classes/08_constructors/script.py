class Circle:
  pi = 3.14
  
  # Add constructor here:
  def __init__(self, diameter):
    print("New circle with diameter: " + str(diameter))

teaching_table = Circle(36)


# Example From Notes

# class Shouter:
#   def __init__(self):
#     print("HELLO?!")

# shout1 = Shouter()
# # prints "HELLO?!"

# shout2 = Shouter()
# # prints "HELLO?!"


# Example From Notes

# class Shouter:
#   def __init__(self, phrase):
#     # make sure phrase is a string
#     if type(phrase) == str:

#       # then shout it out
#       print(phrase.upper())

# shout1 = Shouter("shout")
# # prints "SHOUT"

# shout2 = Shouter("shout")
# # prints "SHOUT"

# shout3 = Shouter("let it all out")
# # prints "LET IT ALL OUT"


