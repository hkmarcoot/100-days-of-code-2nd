Congratulations on finishing this article on deadlocks! Let us review what we learned.

Deadlocks arise because two threads need a lock that the other thread has and neither is willing to give theirs up. The way in which locks are implemented guarantees that this risk will always be possible – if a thread tries to lock a mutex that is unavailable, it will wait indefinitely until it gets the lock before executing. By waiting indefinitely, none of the thread’s other tasks will execute – including releasing any other locks it might possess. As a result, two threads can easily get stuck trying to get each other’s locks.

While deadlocks are highly undesirable, they are also not the end of the world. Though imperfect, we have several tools that can help us recover from deadlocks in a way that will not wreck our program.
