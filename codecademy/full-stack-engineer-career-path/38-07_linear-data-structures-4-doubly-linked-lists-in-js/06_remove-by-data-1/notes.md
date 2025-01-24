## Remove By Data I

In addition to removing the head and the tail of the list, it would also be useful to remove a specific element that could be anywhere in the list. Imagine that you have a list of errands to run. You don’t always do your errands in order, so when you finish doing your laundry, that could be somewhere in the middle of the list. We are going to build a .removeByData() method that will allow you to cross off (remove) that errand no matter where it is in the list.

In order to do this:

- Iterate through the list to find the matching node
- If there is no matching element in the list:
- Return null
- If there is a matching node, we will then check to see if it is the head or tail of the list:
- If so, call the corresponding .removeHead() or .removeTail() method
- If not, that means the node was somewhere in the middle of the list. In that case:
- Remove it by resetting the pointers of its previous and next nodes
- Finally, return the node
