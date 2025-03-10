## Using 'as' Operators

In C#, the as operator attempts to cast an object to a given type, returning null if the cast fails. This is useful for safely trying to downcast an object to a more derived type without risking an exception.

If you have not encountered null until now, it represents an uninitialized state of a reference. With null as an option, we can now cast and check after the fact if it was successful. Let’s look at an example:

```
class Program
{
  static void Main(string[] args)
  {
    // Create an Animal reference pointing to a Dog object
    Animal myAnimal = new Dog();

    // Use the 'as' operator to attempt to cast the Animal reference to a Dog
    Dog myDog = myAnimal as Dog;

    if (myDog != null)
    {
      myDog.Fetch();
    }

    // Use the 'as' operator to attempt to cast the Animal reference to a Cat
    Cat myCat = myAnimal as Cat;

    if (myCat == null)
    {
      Console.WriteLine("Downcasting failed using 'as' operator.");
    }
  }
}

```

In the above example:

- The as operator attempts to cast myAnimal to a Dog and calls the Fetch() method if successful.
- The as operator attempts to cast myAnimal to a Cat and prints a message if the cast fails.

It is important to note that the as operator can be used to upcast as well, but it is more common to use the implicit assignment statement when upcasting.
