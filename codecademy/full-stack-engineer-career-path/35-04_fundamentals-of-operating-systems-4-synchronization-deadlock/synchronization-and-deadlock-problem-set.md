Why do race conditions occur?

- A program is a series of operations that, when executed in a certain order, yield a given result. Race conditions occur because, under certain circumstances, the order in which these operations execute is random. This can happen if we fail to enforce mutual exclusion on shared resources within our multithreaded programs. The state of our program may be determined by the order in which certain threads modify the shared resource. Because the order of these operations cannot be guaranteed, and because the state of our program depends on the order, what we are left with is a race condition. As a result, we cannot be sure that our program will behave the same way each time we run it.

What is a mutual exclusion lock?

- A mutual exclusion lock or mutex is a tool we use to synchronize our multithreaded programs. Like its name suggests, a mutex enforces the mutual exclusion condition on a critical section. How this works is that, at the beginning of a critical section we lock a mutex (let’s call foo) and, at the end of the critical section, we unlock foo. From a thread’s perspective, if it tries to execute code within the critical section, it must first lock the mutex and will wait for it to be unlocked before entering the critical section.

Describe the three conditions necessary to achieve synchronization.

- In order to achieve synchronization, each critical section of our code must meet the following three conditions: mutual exclusion, progress, and bounded waiting. Mutual exclusion means that no more than one thread may access this critical section at a given time. Progress means that if no thread is currently inside the critical section, a thread attempting to access it must be allowed to do so. Finally, bounded waiting means that each thread that wishes to gain access to a critical section must, at some point, gain access.

Describe the concept of atomicity from the perspective of atomic variables and operations.

- An atomic operation is the most basic operation a computer can perform. It is the only operation a processor can perform. More complex operations are just a collection of many atomic operations. Importantly, an atomic operation cannot take place concurrently with any other atomic operation. That is, our processor performs exactly one atomic operation at a time. An atomic variable is a variable whose modification takes place as a single atomic operation. Because these operations cannot take place concurrently with any other operation, modifying an atomic variable is inherently thread-safe. Therefore, if an atomic integer must be shared by several threads in a multithreaded program, mutual exclusion on that integer exists per se, even without the use of locks.

What is the fundamental benefit of using condition variables to synchronize multithreaded programs?

- The fundamental benefit of using condition variables is that they allow a thread to sleep while waiting on a certain condition to arise pertaining to a shared resource. Using only mutual exclusion locks, a thread will have to get a lock on the resource, check its value, then unlock the resource over and over again before continuing. What is significantly more efficient is for a thread, when its behavior depends on the state of a certain shared resource, to simply ask to be notified when the resource is in that state. In the meantime, the thread can (and does) sleep.
