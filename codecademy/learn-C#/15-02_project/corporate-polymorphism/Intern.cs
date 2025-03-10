using System;

namespace CorporatePolymorphism
{
  // Placeholder for Intern class implementation
  class Intern : Employee
  {
    public override void SubmitDailyReport(){
      Console.WriteLine("Intern submits daily report.");
    }
    public override void Work(){
      Console.WriteLine("Intern assists with the project.");
    }
  }
}