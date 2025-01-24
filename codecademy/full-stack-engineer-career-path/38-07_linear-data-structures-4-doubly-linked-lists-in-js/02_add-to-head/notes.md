## Add To Head

In a linked list, we add to the head of the list by checking to see if there is already a head. We then either set the new node as the head (if there was no head) or update the head property, and link the past head to the new head.

Since a doubly linked list has an additional tail property and is built with nodes that each have two pointers, there are a few more steps:

- Start by checking to see if there is a current head to the list
- If there is (meaning the list is not empty), then we want to reset the pointers at the head of the list:
- Set the current head’s previous node to the new head
- Set the new head’s next node to the current head
- Update the head property to be the new head
- Finally, if there isn’t a current tail to the list (meaning the list was empty):
- Update the tail property to be the new head since that node will be both the head and tail
