## Add To Tail

Since doubly linked lists have a tail property, we don’t have to iterate through the entire list to add to the tail like we did with a singly linked list. The new method will mirror what we did in our .addToHead() method:

- Start by checking to see if there is a current tail to the list
- If there is (meaning the list is not empty), then we want to reset the pointers at the tail of the list:
- Set the current tail’s next node to the new tail
- Set the new tail’s previous node to the current tail
- Update the tail property to be the new tail
- Finally, if there isn’t a current head to the list (meaning the list was empty):
- Update the head property to be the new tail since that node will be both the head and tail
