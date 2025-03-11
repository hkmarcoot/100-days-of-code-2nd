## Introduction to References

What do you think will be printed by this code?

```
Encyclopedia enc1 = new Encyclopedia();
Encyclopedia enc2 = enc1;
enc1.CurrentPage = 0;
enc2.CurrentPage = 16;
Console.WriteLine(enc1.CurrentPage);
Console.WriteLine(enc2.CurrentPage);

```

The answer is 16 and 16.

To understand what’s happening here, we must understand references. References are going to change the way we can modify and store values. This lesson will explore how references work in C# and how they are useful.
