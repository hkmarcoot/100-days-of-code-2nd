# Your code below:
single_digits = list(range(10))
squares = []

for num in single_digits:
  print(num)
  squares.append(num ** 2)
print(squares)

cubes = [num ** 3 for num in single_digits]
print(cubes)