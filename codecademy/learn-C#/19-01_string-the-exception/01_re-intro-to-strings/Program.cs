using System;

namespace StringTheException
{
  class Program
  {
    static void Main(string[] args)
    {
      // Example 1
      string dog = "chihuahua";
      string tinyDog = dog;
      dog = "dalmation";
      Console.WriteLine(dog);
      // Output: "dalmation"
      Console.WriteLine(tinyDog);
      // Output: "chihuahua"

      // Example 2
      string s1 = "Hello ";
      string s2 = s1;
      s1 += "World";
      System.Console.WriteLine(s1);
      // Output: "Hello World"
      System.Console.WriteLine(s2);
      // Output: "Hello "
    }
  }
}
