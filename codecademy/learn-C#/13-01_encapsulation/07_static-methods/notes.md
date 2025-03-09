## Static Methods

Fields and properties are not the only members that can be made static — we can also create static methods to define behavior that applies to a class rather than its instances:

```
class Book
{
  // Non-static
  public string Title
  { get; set; }

  private static string Definition { get; set; } = "A connected collection of pages";
  public static void Define()
  {
    Console.WriteLine(Definition);
  }
}

```

Like other static members, static methods are called from the class rather than an instance:

```
public static void Main(string[] args)
{
  Book.Define();
  // Prints "A connected collection of pages"
}

```

Static methods can only access other static members. They cannot access instance members:

```
class Book
{
  // Non-static
  public string Title
  { get; set; }

  private static string Definition { get; set; } = "A connected collection of pages";
  public static void Define()
  {
    // OK. Static methods can access static properties
    Console.WriteLine(Definition);

    // Throw an error, static method cannot access instance properties
    Console.WriteLine(Title);
  }
}

```

The preceding code would throw an error like this:

```
error CS0120: An object reference is required for the non-static field, method, or property 'Book.Title'

```
