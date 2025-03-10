using System;

namespace PolymorphismBasics
{
  // Define the abstract Employee class here
  abstract class Employee
  {
    // Abstract method
    public abstract void MakeHRRequest();

    // Concrete method
    public void ClockIn()
    {
      Console.WriteLine("Employee clocks in.");
    }
  }

  class Engineer : Employee
  {
    public override void MakeHRRequest()
    {
      Console.WriteLine("Engineer makes an HR request.");
    }

    public void Promotion()
    {
      Console.WriteLine("Engineer gets a promotion.");
    }

    public void SubmitPR()
    {
      Console.WriteLine("Engineer submits a pull request.");
    }
  }

  class Manager : Employee
  {
    public override void MakeHRRequest()
    {
      Console.WriteLine("Manager makes an HR request.");
    }

    public void Promotion()
    {
      Console.WriteLine("Manager gets a promotion.");
    }

    public void ConductMeeting()
    {
      Console.WriteLine("Manager conducts a team meeting.");
    }
  }

  class Intern : Employee
  {
    public override void MakeHRRequest()
    {
      Console.WriteLine("Intern makes an HR request.");
    }

    public void FetchCoffee()
    {
      Console.WriteLine("Intern fetches coffee for the team.");
    }
  }

  class HR : Employee
  {
    public override void MakeHRRequest()
    {
      Console.WriteLine("HR processes an HR request.");
    }

    public void OrganizeTraining()
    {
      Console.WriteLine("HR organizes a training session.");
    }
  }

  class Salesperson : Employee
  {
    public override void MakeHRRequest()
    {
      Console.WriteLine("Salesperson makes an HR request.");
    }

    public void MakeSale()
    {
      Console.WriteLine("Salesperson makes a sale.");
    }
  }

  class Developer : Employee
  {
    public override void MakeHRRequest()
    {
      Console.WriteLine("Developer makes an HR request.");
    }

    public void WriteCode()
    {
      Console.WriteLine("Developer writes code.");
    }

    public void FixBug()
    {
      Console.WriteLine("Developer fixes a bug.");
    }
  }

  class Designer : Employee
  {
    public override void MakeHRRequest()
    {
      Console.WriteLine("Designer makes an HR request.");
    }

    public void CreateDesign()
    {
      Console.WriteLine("Designer creates a new design.");
    }
  }

  class CEO : Employee
  {
    public override void MakeHRRequest()
    {
      Console.WriteLine("CEO makes an HR request.");
    }

    public void MakeDecision()
    {
      Console.WriteLine("CEO makes a critical business decision.");
    }
  }

  class Program
  {
    static void Main(string[] args)
    {
      // Create instances of Employee
      Employee myEngineerEmployee = new Engineer();
      Employee myManagerEmployee = new Manager();
      Employee myInternEmployee = new Intern();
      Employee myHREmployee = new HR();
      Employee mySalespersonEmployee = new Salesperson();
      Employee myDeveloperEmployee = new Developer();
      Employee myDesignerEmployee = new Designer();
      Employee myCEOEmployee = new CEO();

      // Call the MakeHRRequest and ClockIn methods on Employee references
      myEngineerEmployee.MakeHRRequest(); // Output: Engineer makes an HR request.
      myEngineerEmployee.ClockIn(); // Output: Employee clocks in.

      myManagerEmployee.MakeHRRequest(); // Output: Manager makes an HR request.
      myManagerEmployee.ClockIn(); // Output: Employee clocks in.

      myInternEmployee.MakeHRRequest(); // Output: Intern makes an HR request.
      myInternEmployee.ClockIn(); // Output: Employee clocks in.

      myHREmployee.MakeHRRequest(); // Output: HR processes an HR request.
      myHREmployee.ClockIn(); // Output: Employee clocks in.

      mySalespersonEmployee.MakeHRRequest(); // Output: Salesperson makes an HR request.
      mySalespersonEmployee.ClockIn(); // Output: Employee clocks in.

      myDeveloperEmployee.MakeHRRequest(); // Output: Developer makes an HR request.
      myDeveloperEmployee.ClockIn(); // Output: Employee clocks in.

      myDesignerEmployee.MakeHRRequest(); // Output: Designer makes an HR request.
      myDesignerEmployee.ClockIn(); // Output: Employee clocks in.

      myCEOEmployee.MakeHRRequest(); // Output: CEO makes an HR request.
      myCEOEmployee.ClockIn(); // Output: Employee clocks in.

      // Call role-specific methods
      ((Engineer)myEngineerEmployee).Promotion();
      ((Manager)myManagerEmployee).ConductMeeting();
      ((Intern)myInternEmployee).FetchCoffee();
      ((HR)myHREmployee).OrganizeTraining();
      ((Salesperson)mySalespersonEmployee).MakeSale();
      ((Developer)myDeveloperEmployee).WriteCode();
      ((Designer)myDesignerEmployee).CreateDesign();
      ((CEO)myCEOEmployee).MakeDecision();
    }
  }
}
