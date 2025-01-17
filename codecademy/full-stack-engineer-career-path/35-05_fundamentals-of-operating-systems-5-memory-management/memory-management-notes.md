Memory is possibly the most important resource our computer has, so the way in which information is stored in memory is critical to maintaining an efficient, safe computing environment.

The term memory refers not to just one place where information is stored, but a number of different places like disk, RAM, and our processor registers. These types of memory vary in two ways: size and speed. As a general rule of thumb: the faster the memory, the less of it we have to work with.

With the memory management technique segmentation, a process’ data is stored in a single block of contiguous physical memory that varies in size from process to process. Segmentation can lead to fragmentation, though, a suboptimal way in which blocks of memory are allocated which makes managing memory more difficult.

Paging, on the other hand, avoids these inefficiency concerns by allocating memory for a process in smaller, non-contiguous blocks of memory called pages. By splitting up our process’ memory into smaller pieces and not allocating those pieces contiguously, the OS has much more flexibility about where to allocate memory.

Virtualization allows the operating system to sandbox user-space processes to protect other processes (especially the operating system kernel) from attacks on their memory by rogue processes.

You should now have a basic understanding of how an operating system fulfills its role as memory manager. Congratulations on completing this lesson!
