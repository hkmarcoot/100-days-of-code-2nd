## Size I

With stacks, size matters. If we’re not careful, we can accidentally over-fill them with data. Since we don’t want any stack overflow, we need to go back and make a few modifications to our methods that help us track and limit the stack size so we can keep our stacks healthy.

What do we do if someone tries to .peek() or .pop() when our stack is empty?

How do we keep someone from .push()ing to a stack that has already reached its limit?

How do we even know how large our stack has gotten?
