can_we_count_it = [{'s': False}, "sassafrass", 18, ["a", "c", "s", "d", "s"]]

for element in can_we_count_it:
  if hasattr(element, "count"):
    print(str(type(element)) + " has the count attribute!")
  else:
    print(str(type(element)) + " does not have the count attribute :(")

# Example From Notes

# class NoCustomAttributes:
#   pass

# attributeless = NoCustomAttributes()

# try:
#   attributeless.fake_attribute
# except AttributeError:
#   print("This text gets printed!")

# # prints "This text gets printed!"

# hasattr(attributeless, "fake_attribute")
# # returns False

# getattr(attributeless, "other_fake_attribute", 800)
# # returns 800, the default value

