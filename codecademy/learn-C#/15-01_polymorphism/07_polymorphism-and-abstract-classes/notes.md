## Polymorphism and Abstract Classes

In C#, an abstract class provides a blueprint of what derived classes need to implement. This is done through the use of implemented and unimplemented methods.

Abstract classes can not be instantiated, but like all base classes, they can supply implemented methods. These methods can be virtual for derived classes to override.

Abstract classes can also contain abstract methods, which are not implemented in the abstract class and therefore must be implemented by the derived class.

The abstract keyword is used to specify both abstract classes and methods. Let’s walk through an example:

```
abstract class Animal
{
  // Abstract Method
  public abstract void MakeSound();

  // Virtual Method
  public virtual void Move()
  {
    Console.WriteLine("Animal moves.");
  }

  // Non-Virtual Method
  public void Sleep()
  {
    Console.WriteLine("Animal sleeps.");
  }
}

```

In the above example:

- The Animal class is labeled with the abstract keyword, meaning it cannot be instantiated directly. Note that the method parentheses are followed by a semicolon (;).
- The MakeSound() method is labeled abstract, so it is not implemented and must be implemented in a derived class.
- The Move() method is labeled virtual, has an implementation, and can be overridden in a derived class.
- The Sleep() method is implemented with no label so it can not be overridden in a derived class.

Now lets look at the derived class example:

```
class Dog : Animal
{
  public override void MakeSound()
  {
    Console.WriteLine("Dog barks.");
  }

  public override void Move()
  {
    Console.WriteLine("Dog runs.");
  }
}

class Cat : Animal
{
  public override void MakeSound()
  {
    Console.WriteLine("Cat meows.");
  }
}

```

Looking at the above derived classes, we can see that both Dog and Cat classes implement the MakeSound() method using the override keyword. This is because it was labeled abstract in the Animal class, so it is the job of the derived classes to implement.

The Dog class chooses to override the Move() method since it is a virtual method in the abstract class.

Abstract classes fulfill the practice of Polymorphism by defining necessary behaviors without implementing them. They pass the task of implementation on to the more specific derived classes.
