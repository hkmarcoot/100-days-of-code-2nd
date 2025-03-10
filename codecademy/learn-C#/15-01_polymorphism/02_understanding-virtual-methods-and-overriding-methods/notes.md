## Understanding Virtual Methods and Overriding Methods

To enable Polymorphism within our class structure, we will need to create virtual methods within a base class. We can then override those methods in the derived class. Let’s take a look at how this is done.

A virtual method is a method in the base class that can be overridden in derived classes. The virtual keyword is used to allow derived classes to provide specific implementations of this method.

```
public class Animal
{
  public virtual void MakeSound()
  {
    Console.WriteLine("Animal makes a sound.");
  }
}

```

The above virtual method is defined using the virtual keyword.

Overriding Methods

Method overriding allows a derived class to provide a specific implementation of a method that is already defined in its base class. The override keyword is used to indicate that a method in a derived class is intended to replace a method in the base class.

```
public class Dog : Animal
{
  public override void MakeSound()
  {
    Console.WriteLine("Dog barks.");
  }
}

```

The above method overrides the base class’ virtual method using the override keyword.
