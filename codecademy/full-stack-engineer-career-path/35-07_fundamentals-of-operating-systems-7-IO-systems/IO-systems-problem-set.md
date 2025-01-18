What kind of information is stored in the kernel space as opposed to the user-space?

- The kernel space is the area of memory that contains the core of our operating system — the kernel. The information stored here is critical to the functioning of our computer. A computer functions as a result of the interaction of a number of different hardware components. An operating system that orchestrates these interactions is the basis for computing. For that reason, we make a distinction (both in theory and actuality) between areas where kernel information is stored (the kernel space) and places where non-kernel information is stored (the user-space). The user-space is just the non-kernel-space; that is, any data not part of the kernel is stored in the user-space. This includes things like personal photos, applications like word processors etc.

What is an interrupt handler?

- An interrupt handler is a software component which IO devices send to the processor. There may be a number of interrupts all arriving at roughly the same time, before the processor has had a chance to respond to the first interrupt. What the handler does is:

- Keeps track of the interrupts in a queue
- Acknowledges to the IO device that the interrupt has been received
- Prioritizes the interrupts such that the processor responds to the most important or time-sensitive interrupts first.
