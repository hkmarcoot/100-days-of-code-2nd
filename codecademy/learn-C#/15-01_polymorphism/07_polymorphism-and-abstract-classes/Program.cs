using System;

namespace PolymorphismBasics
{
  // Your classes below
  abstract class Employee
  {
    public abstract void MakeHRRequest();

    public void Promotion()
    {
      Console.WriteLine("The employee is getting a promotion.");
    }
  }

  class Manager : Employee
  {
    public override void MakeHRRequest()
    {
      Console.WriteLine("A Manager is making an HR Request.");
    }
  }

  public class Program
  {
    public static void Main(string[] args)
    {
      // Your manager variable below
      Manager manager = new Manager();
      manager.MakeHRRequest();
      manager.Promotion();
    }
  }
}
