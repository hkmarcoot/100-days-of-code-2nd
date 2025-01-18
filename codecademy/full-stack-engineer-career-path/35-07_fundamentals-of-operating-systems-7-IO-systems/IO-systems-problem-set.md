What kind of information is stored in the kernel space as opposed to the user-space?

- The kernel space is the area of memory that contains the core of our operating system — the kernel. The information stored here is critical to the functioning of our computer. A computer functions as a result of the interaction of a number of different hardware components. An operating system that orchestrates these interactions is the basis for computing. For that reason, we make a distinction (both in theory and actuality) between areas where kernel information is stored (the kernel space) and places where non-kernel information is stored (the user-space). The user-space is just the non-kernel-space; that is, any data not part of the kernel is stored in the user-space. This includes things like personal photos, applications like word processors etc.

What is an interrupt handler?

- An interrupt handler is a software component which IO devices send to the processor. There may be a number of interrupts all arriving at roughly the same time, before the processor has had a chance to respond to the first interrupt. What the handler does is:

- Keeps track of the interrupts in a queue
- Acknowledges to the IO device that the interrupt has been received
- Prioritizes the interrupts such that the processor responds to the most important or time-sensitive interrupts first.

What is an interrupt?

- An interrupt is a signal sent from a hardware IO device to our computer in order to get its attention immediately. When an interrupt is sent by an IO device, the processor is notified and its currently executing task — should there be one — is immediately halted. These processes cannot continue their execution until and unless our computer responds to the interrupt.

What is the difference between blocking and non-blocking IO requests?

- The fundamental distinction between blocking and non-blocking IO requests is what happens to our currently running processes when such a request is made. When a blocking IO request is made, a process cannot continue executing until the information from the IO is parsed and received by the process. A non-blocking IO request has the opposite behavior; an application can continue executing even as a non-blocking IO request is made.

What is the difference between device drivers and controllers?

- Device drivers are software programs that enable our OS to operate hardware devices like keyboards and monitors. Driver software might contain a list of commands a computer can send to a device and the types of information it can expect to receive back. A device controller, on the other hand, is hardware. It provides an interface between the device driver and the device itself. The device controller will take in commands from our computer — and translate them into electrical signals the hardware device can understand. We need this because our hardware devices generally do not understand the language our computer speaks. We need an intermediary to translate between the two.
