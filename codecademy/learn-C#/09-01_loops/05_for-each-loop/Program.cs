using System;

namespace ForEachLoop
{
  class Program
  {
    static void Main(string[] args)
    {
      string[] todo = {"respond to email", "make wireframe", "program feature", "fix bugs"};
      foreach (string item in todo){
        Console.WriteLine($"[] {item}");
      }
     
    }
  }
}
