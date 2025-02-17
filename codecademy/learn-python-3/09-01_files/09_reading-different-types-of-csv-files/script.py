import csv

isbn_list = []
with open('books.csv') as books_csv:
  books_reader = csv.DictReader(books_csv, delimiter='@')
  for row in books_reader:
    isbn_list.append(row['ISBN'])

print(isbn_list)

# Example From Notes

# import csv

# with open('addresses.csv', newline='') as addresses_csv:
#   address_reader = csv.DictReader(addresses_csv, delimiter=';')
#   for row in address_reader:
#     print(row['Address'])
