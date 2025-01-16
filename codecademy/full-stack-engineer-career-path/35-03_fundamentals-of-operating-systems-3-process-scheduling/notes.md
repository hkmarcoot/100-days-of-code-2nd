Scheduling algorithms manage processes through the use of states and queues, each managed by one of the three process schedulers: the long-term scheduler which admits processes to the ready queue, the medium-term scheduler which blocks processes for access to resources, and the short-term scheduler which admits processes from the ready queue to the CPU to actually be executed.

How processes move within these data structures depends on the algorithm used and the scheduling goals desired for the system. There are a variety of scheduling algorithms including:

- First come, first served, where processes are put into a queue and then executed in the order that they arrive.
- Priority scheduling, where each process is given a numeric priority and then those processes are organized and executed according to that priority.
- Shortest job first, a variation of priority scheduling, where processes with the shortest execution time, as calculated through some historical average runtime, are prioritized to run first.
- Shortest remaining time, a preemptive variation of shortest job first where processes with the shortest remaining execution time are prioritized to run first.
- Round robin, where a fixed amount of execution time, called a time slice, is chosen and assigned to each process. Each process is cycled through until eventually all of the processes are completed.
- Multiple-level queue scheduling, where processes are categorized and then placed in multiple queues or levels with differing priorities.
