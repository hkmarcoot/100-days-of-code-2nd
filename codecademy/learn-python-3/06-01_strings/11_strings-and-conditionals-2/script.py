def contains(big_string, little_string):
  return little_string in big_string

def common_letters(string_one, string_two):
  arr = []
  for i in string_one:
    if i in string_two:
      if not i in arr:
        arr.append(i)
  return arr