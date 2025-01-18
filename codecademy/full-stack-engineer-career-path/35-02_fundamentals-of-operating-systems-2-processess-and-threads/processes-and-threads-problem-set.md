Compare and contrast programs with processes and threads.

- A computer program is a collection of instructions stored on the disk, while a process is an abstraction used to represent a program while it is executing. A thread on the other hand represents the precise sequence of instructions that are actively being executed.

How does a process being blocked differ from it being preempted? How do these two events affect the process lifecycle?

- When a process has to wait for a contested, limited, or slow resource, such as accessing a specific file or waiting for a network request, it is blocked. On the other hand, preemption is the forcible interruption by an external scheduler to prioritize a more important task.

- Both of these require a context switch by the CPU which is typically an expensive operation as the current state of the process needs to be stored and then be reloaded later to resume execution.

- Managing the blocked processes also requires an extra blocked state that sits between the process’s return to the ready state from the running state. Preemption avoids this by forcing the process directly back to the ready state, as the process does not need to wait for any additional contested resources.

Describe the parent-child relationship and its effects on a process’s memory layout and control block.

- The parent-child relationship describes the hierarchy between processes as they launch one another. This relationship facilitates the sharing of common data and signals along the hierarchy as well as the arrangement of which process may terminate first.

- A process’s memory layout only contains the text section for the compiled code, a data section for initialized variables, a stack for local variables defined within functions, and a heap for dynamic memory allocation. The structure of the memory layout would thereby be unaffected between different processes regardless of their relation.

- As the process control block contains much of the bookkeeping information of a process, relevant data such as the ID of the parent process will be directly influenced by the parent-child relationship. Similarly, the child process’s permissions and priority are likely to either be set or inherited from the parent.

What are one benefit and one drawback of multithreading?

- Multithreading allows a single CPU core to execute multiple threads at once, thereby improving system utilization and responsiveness by more efficiently splitting up tasks. However, multithreading can also create more complex code due to having to manage shared resources and due to the nondeterminism brought about by synchronizing many concurrent threads.

Describe the mapping of user threads to kernel threads within the M:N hybrid threading model and the benefits this model provides.

- M:N hybrid threading maps collections of user threads to each kernel thread in an attempt to combine the benefits of 1:1 kernel-level threading and N:1 user-level threading. M:N hybrid threading allows threads to be both very fast through hardware accelerated kernel threads as well as be very light through efficient context switching in user space.
