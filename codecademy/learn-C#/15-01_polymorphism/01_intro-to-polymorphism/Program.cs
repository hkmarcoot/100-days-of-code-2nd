using System;

namespace PolymorphismBasics
{
  class Animal
  {
    public virtual void MakeSound()
    {
      Console.WriteLine("Animal makes a sound.");
    }
  }

  class Dog : Animal
  {
    public override void MakeSound()
    {
      Console.WriteLine("Dog barks.");
    }
  }

  // Define the Cat class here
  class Cat : Animal
  {
    public override void MakeSound()
    {
      Console.WriteLine("Cat meows.");
    }
  }


  public class Program
  {
    static void Main(string[] args)
    {
      // Create instances of derived classes
      Animal myDog = new Dog();
      Animal myCat = new Cat();

      // Call the MakeSound method
      myDog.MakeSound(); // Output: Dog barks.
      myCat.MakeSound(); // Output: Cat meows.
    }
  }
}