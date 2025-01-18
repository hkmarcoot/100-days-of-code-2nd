Let’s review what we have learned so far about IO hardware:

- There are different types of IO devices that can be categorized into three general categories: human-readable, machine-readable, and communication.
- There are two types of device drivers: kernel-mode and user-mode. Device drivers support the communication between IO devices and the CPU.
- There are three methods that IO devices use to read/write data: character, block, and network.
- In IO systems, blocking is a method in which when an IO makes a request, an application typically cannot continue executing other requests until it has the necessary information changes from the IO.
- In contrast, non-blocking requests get placed into a queue while waiting so that the CPU resources can be used to complete other tasks from the event pool of an application.
- The interrupt handler is like a pool or queue of interrupts being sent to the CPU. It handles the execution of interrupt signals as they are received from IO devices.
- Memory-mapped IO refers to a system that is designed to allow both an IO device that is connected to a computer and the memory of the computer to share address space to the interface.
- Direct memory access (DMA) refers to a method in which IO devices have direct access to the main memory of a computer. For DMA, a CPU will trigger the execution of data to/from an IO device to a computer, but then will continue to complete other tasks while the data transfer executes.
