## Adding to the List

In a doubly linked list, adding to the list is a little complicated as we have to keep track of and set the node’s previous pointer as well as update the tail of the list if necessary.

Adding to the Head
When adding to the head of the doubly linked list, we first need to check if there is a current head to the list. If there isn’t, then the list is empty, and we can simply make our new node both the head and tail of the list and set both pointers to null. If the list is not empty, then we will:

- Set the current head’s previous pointer to our new head
- Set the new head’s next pointer to the current head
- Set the new head’s previous pointer to null

Adding to the Tail
Similarly, there are two cases when adding a node to the tail of a doubly linked list. If the list is empty, then we make the new node the head and tail of the list and set the pointers to null. If the list is not empty, then we:

- Set the current tail’s next pointer to the new tail
- Set the new tail’s previous pointer to the current tail
- Set the new tail’s next pointer to null
