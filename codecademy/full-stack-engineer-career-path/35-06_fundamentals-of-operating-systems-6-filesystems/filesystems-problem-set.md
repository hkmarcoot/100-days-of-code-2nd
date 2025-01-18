How does a file differ from a directory? What is a working directory?

- A file is a unit of storage used to describe a self-contained piece of data. It creates the basis of the filesystem.

- A directory is a data structure that contains references to files and other directories. It is the organizational component of the filesystem, giving it structure.

- A working directory is the directory associated with the execution of a process.

Describe each of the following file system concepts:

File attributes
File permissions
File control block

- File attributes are a collection of metadata that determine how files behave, such as if they are hidden or compressed, while file permissions determine which users and groups can read, write, and execute the file. The file control block contains the accounting information of the file, such as the file’s permissions, owners, size, and the times it was created, modified, and accessed.

What is the difference between a sector and a block within a filesystem?

- A sector is the smallest unit of storage for a physical drive. It is the tiniest section of a hard disk that can be altered to store data.

- A block is the smallest unit of storage for the software filesystem. It serves as a software abstraction of available space within the filesystem. This gives the operating system and all of its applications a standard unit size regardless of the design decisions of the underlying hardware.

How would a request to save a file in an application traverse the layers of the filesystem?

- The layers of the filesystem from most user facing to closest to the hardware:

- Application Programs - This is where the request to save a file begins.

- Logical File System - Here the application gets a high-level interface to save the file and verify if the user has permission to modify the file.

- File-Organization Module - Finds the software blocks for the file and checks if there is enough space available to save the file.

- Basic File System - Schedules the request for the physical hard drive and blocks the request if the resource is busy.

- IO Control - Takes the request from the basic file system and transforms it into instructions for the particular storage device the computer is using to save the data.

- Devices - Physically changes the magnetic state of the spinning disk in the relevant section as decided by the IO control.

In a Unix operating system what would be the command to create a file called croton?

What would be the command to create a directory named plants?

- Files can be created using the touch command, so a croton file can be created using the command touch croton.

- Directories can be created using the mkdir command, so a plants directory can be created using the command mkdir plants.
