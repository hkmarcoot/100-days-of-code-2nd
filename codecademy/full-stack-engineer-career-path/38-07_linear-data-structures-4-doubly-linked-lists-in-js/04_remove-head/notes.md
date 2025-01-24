## Remove Head

Due to the added tail property, removing the head of the list in a doubly linked list is a little more complicated than doing so in a singly linked list:

- Start by checking if there’s a current head to the list. If there isn’t:
- The list is empty, so there’s nothing to return, and the method ends
- Otherwise, update the list’s head to be the current head’s next node
- If there is still a head to the list (meaning the list had more than one element when we started):
- Set the head’s previous node to null since there should be no node before the head of the list
- If the removed head was also the tail of the list (meaning there was only one element in the list), call .removeTail() to make the necessary changes to the tail of the list. (We will create this method in the next exercise!)
- Finally, return the old head
