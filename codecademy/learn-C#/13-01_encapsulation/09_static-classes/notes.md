## Static Classes

We’ve covered a few static members, including fields, properties, methods, and constructors. C# also allows us to create entire static classes!

```
static class Utility {
  public static void Useful() {
    Console.WriteLine("This is a useful method");
  }
}

```

A static class cannot be instantiated and may only contain static members, so we should only create one if we are making a utility or library, like Math or Console.

These two common classes are static because they are just tools — they don’t need specific instances:

```
Math.Min(34, 54);
Console.WriteLine("Hello, world!");
Utility.Useful();

```
