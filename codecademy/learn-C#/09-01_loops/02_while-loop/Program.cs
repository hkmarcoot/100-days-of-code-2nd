using System;

namespace WhileLoop
{
  class Program
  {
    static void Main(string[] args)
    {
      int emails = 20;  
      while(emails >= 0){
        Console.WriteLine(emails);
        emails--;
      }
      Console.WriteLine("INBOX ZERO ACHIEVED!");
    }
  }
}
