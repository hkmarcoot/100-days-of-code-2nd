## Remove Tail

In addition to being able to add to the head of the list, a doubly linked list’s tail property allows us to add to the tail just as easily. In fact, like the .addToHead() and .addToTail() methods, the .removeTail() method will closely mirror the .removeHead() method:

- Start by checking if there’s a current tail to the list. If there isn’t:
- The list is empty, so there’s nothing to return, and the method ends
- Otherwise, update the list’s tail to be the current tail’s previous node
- If there is still a tail to the list (meaning the list had more than one element when we started):
- Set the tail’s next node to null since there should be no node after the tail of the list
- If the removed tail was also the head of the list (meaning there was only one element in the list), call .removeHead() to make the necessary changes to the head of the list
- Finally, return the old tail
