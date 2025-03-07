using System;

namespace BuiltInMethods
{
  class Program
  {
    static void Main(string[] args)
    {     
      string[] summerStrut;
      
      summerStrut = new string[] { "Juice", "Missing U", "Raspberry Beret", "New York Groove", "Make Me Feel", "Rebel Rebel", "Despacito", "Los Angeles" };
      
      int[] ratings = { 5, 4, 4, 3, 3, 5, 5, 4 };
      int threeStars = Array.IndexOf(ratings, 3) + 1;
      Console.WriteLine($"Song number {threeStars} is rated three stars");
      Array.Reverse(summerStrut);
      Console.WriteLine(summerStrut[0]);
      Console.WriteLine(summerStrut[7]);
      Array.Sort(summerStrut);
      Console.WriteLine(summerStrut[0]);
      Console.WriteLine(summerStrut[7]);
    }
  }
}
