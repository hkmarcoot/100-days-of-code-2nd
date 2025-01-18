Let’s review what we have learned about IO software:

- The user-space is the place in memory in which user processes run and the kernel-space is the place in memory in which the kernel functions and manages system calls.
- The user-space interacts with the kernel by sending system calls to the kernel-space.
- Layers of the IO system that support kernel-space include: device-independent software, device drivers, interrupt handlers
- Layers of the IO system that support user-space include: user-level IO software
- Device drivers are device-specific code that is added to a computer so that a device may interact with a computer.
- The interrupt handler is a pool or queue of interrupts being sent to the CPU.
- Device-independent software refers to the software components that handle functions that are not specific to any single IO device.
