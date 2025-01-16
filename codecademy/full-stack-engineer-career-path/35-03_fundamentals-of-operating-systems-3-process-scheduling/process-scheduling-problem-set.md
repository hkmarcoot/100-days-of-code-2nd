Within process scheduling, what is the difference between throughput, wait time, and response time?

Which of these measures would be most important for operating a machine such as a car and why? What about for a busy server attempting to process as many network requests as possible?

- Throughput is the total amount of processes completed per unit of time, while wait time is the amount of time it takes for a process to become ready after being executed, and response time is the amount of time it takes a process to finish after becoming ready.

- For machines such as cars, response time is the most important measure as any delay in the operation could be dangerous. For a busy server attempting to process many network requests, throughput would be the most important measure to complete the greatest amount of network requests in the least amount of time.

What are the differences between the long-term, medium-term, and short-term schedulers?

- The long-term scheduler admits processes to the ready queue, the medium-term scheduler blocks processes for access to resources, and the short-term scheduler admits processes from the ready queue to the CPU to actually be executed.

How does the first come, first served scheduling algorithm differ from the round robin scheduling algorithm?

How do these two different approaches affect process starvation?

- First come, first served is a scheduling algorithm where processes are put into a queue and then executed in the order that they arrive. On the other hand, round robin is a scheduling algorithm where a fixed amount of time is chosen and assigned to each process.

- With first come, first served, starvation is possible if an early process does not complete or takes too long to run. With round robin, starvation is not possible as each process is given only a certain amount of time to run before the scheduler moves to a different process.

How do the shortest job first and shortest remaining time scheduling algorithms differ?

- Shortest job first is a scheduling algorithm that prioritizes running the process with the shortest execution time first, while shortest remaining time is a preemptive variant that prioritizes based on shortest remaining execution time instead.

Design three levels for a multiple-level queue scheduling algorithm to best process as many network requests as possible on a server.

- With the goal of processing as many network requests as possible, a scheduling algorithm that maximizes throughput should be chosen to serve as the basis for the model in the middle layer. This is best done with first come, first served scheduling, which produces the least amount of overhead to crunch through the greatest amount of requests. It will serve as the default layer for all processes.

- As first come, first served does not consider priority, a top layer can use round robin scheduling for higher priority requests that should be able to complete in a limited amount of time. If these processes do not complete, they can be moved down to the middle layer.

- To prevent clogging the middle layer with long running processes, a bottom layer can use the shortest job first algorithm to deprioritize these CPU hogs.
