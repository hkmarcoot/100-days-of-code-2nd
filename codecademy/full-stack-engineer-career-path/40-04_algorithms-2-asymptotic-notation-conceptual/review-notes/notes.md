Let’s review what we learned:

- We use asymptotic notation to describe the runtime of a program. The three types of asymptotic notation are big Theta, big Omega, and big O.

- We use big Theta (Θ) to describe the runtime if the runtime of the program is the same in every case.

- The different common runtimes from fastest to slowest are: Θ(1), Θ(log N), Θ(N), Θ(N log N), Θ(N^2), Θ(2^N), Θ(N!).

- We use big Omega (Ω) to describe the best-case running time of a program.

- We use big O (O) to describe the worst-case running time of a program.

- We typically describe a program’s running time in terms of big O.

- When finding the runtime of a program with multiple steps, you can divide the program into different sections and add the runtimes of the various sections. You can then take the slowest runtime and use that runtime to describe the entire program.

- When analyzing the runtime of a program, we care about which part of the program is the slowest.
