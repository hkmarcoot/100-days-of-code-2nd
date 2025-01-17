Congratulations on completing this lesson on synchronization! Multi-threading is the backbone of any complex computer program, and synchronization is what allows us to multi-thread our programs safely. Let’s recap what we learned.

With locks, we are able to provide mutual exclusion on areas of our code where threads must access shared resources. In other words, locks make sure that only one thread at a time can access certain areas of our code.

Locks are not the only way to synchronize our programs. Atomic variables, for instance, are inherently thread-safe because modifying them takes place in exactly one atomic step. Condition variables and semaphores likewise allow us to synchronize our programs while preserving efficiency in cases where locking the entirety of a large resource is not a good option.
