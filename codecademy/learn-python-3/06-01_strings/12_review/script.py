def username_generator(first_name, last_name):
  return first_name[:3] + last_name[:4]

def password_generator(user_name):
  password = ""
  for i in range(0, len(user_name)):
    password += user_name[i-1]
  return password