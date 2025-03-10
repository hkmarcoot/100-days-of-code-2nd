## Using 'is' Operators

In C#, the is operator checks if an object is compatible with a given type.

The result of the is operator is true if an object can be upcast or downcast to a specified type and false if it can not. This can be a useful check before performing these casting operations.

Example:

```
class Program
{
  static void Main(string[] args)
  {
    // Create an Animal reference pointing to a Dog object
    Animal myAnimal = new Dog();

    // Use the 'is' operator to check if the Animal reference can be cast to a Dog
    if (myAnimal is Dog)
    {
      Console.WriteLine("This is a Dog.");
    }

    // Use the 'is' operator to check if the Animal reference can be cast to a Cat
    if (myAnimal is Cat)
    {
      Console.WriteLine("This is a Cat.");
    }
      else
    {
      Console.WriteLine("This is not a Cat.");
    }
  }
}

```

In the above example:

The is operator checks if myAnimal can be cast to type Dog and prints a message if true.
The is operator checks if myAnimal can be cast to type Cat and prints a message if false.
These checks allow us to safely cast, whether it is upcasting or downcasting.
