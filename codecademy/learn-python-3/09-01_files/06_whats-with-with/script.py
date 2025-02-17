with open('fun_file.txt') as close_this_file:
  setup = close_this_file.readline()
  punchline = close_this_file.readline()

print(setup)


# Older ways

# fun_cities_file = open('fun_cities.txt', 'a')

# # We can now append a line to "fun_cities".
# fun_cities_file.write("Montréal")

# # But we need to remember to close the file
# fun_cities_file.close()