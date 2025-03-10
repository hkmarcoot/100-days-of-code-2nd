using System;

namespace PolymorphismBasics
{
  public class Employee
  {
    // Virtual method in the base class
    public virtual void MakeHRRequest()
    {
      Console.WriteLine("Employee makes an HR request.");
    }
  }

  public class Engineer : Employee
  {
    // Override the virtual method in the derived class
    public override void MakeHRRequest()
    {
      Console.WriteLine("Engineer makes an HR request.");
    }
  }

  public class Manager : Employee
  {
    // Override the virtual method in the derived class
    public override void MakeHRRequest()
    {
      Console.WriteLine("Manager makes an HR request.");
    }
  }

  public class Program
  {
    public static void Main(string[] args)
    {
      // Your code below
      Manager myManager = new Manager();
      Employee myEmployeeManager = myManager;
      myEmployeeManager.MakeHRRequest();
    }
  }
}
