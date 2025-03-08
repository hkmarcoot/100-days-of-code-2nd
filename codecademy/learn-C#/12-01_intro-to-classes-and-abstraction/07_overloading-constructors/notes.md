## Overloading Constructors

Just like other methods, constructors can be overloaded. For example, the following Book class has 2 constructor methods defined — one that takes 2 arguments and another that takes only 1:

```
public class Book
{
  public string title;
  public string author;

  public Book(string title, string author)
  {
    this.title = title;
    this.author = author;
  }

  public Book(string title)
  {
    this.title = title;
    this.author = "Unknown";
  }
}

```

The first constructor sets values for both fields, and the second provides a default value for when the author is not specified. We can create Book instances in two ways:

```
Book b1 = new Book("1984", "George Orwell");
Book b2 = new Book("Untitled");

```

Note that there is duplicated code between the 2 constructors (this.title = title;). To avoid this redundancy, we have two options:

1. Use Default Arguments:

```
public Book(string title, string author = "Unknown")
{
  this.title = title;
  this.author = author;
}

```

2. Use : this() to refer to another constructor in the same class. This is useful when the second constructor has additional functionality:

```
public Book(string title, string author)
{
  this.title = title;
  this.author = author;
}

public Book(string title) : this(title, "Unknown")
{
  Console.WriteLine("Author not specified. Value defaulted to 'Unknown'.");
}

```

Remember, this.title refers to the current instance. Using this() like a method refers to another constructor in the current class. Here, the second constructor calls the first and prints additional information to the console.
