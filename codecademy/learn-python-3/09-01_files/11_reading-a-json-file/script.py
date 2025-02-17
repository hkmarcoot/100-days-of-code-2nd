import json

with open('message.json') as message_json:
  message = json.load(message_json)

print(message['text'])

# Example From Notes

# import json

# with open('purchase_14781239.json') as purchase_json:
#   purchase_data = json.load(purchase_json)

# print(purchase_data['user'])
# # Prints 'ellen_greg'
