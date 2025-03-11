using System;

namespace TheObjectClass
{
  class Program
  {
    static void Main(string[] args)
    {
      Book b = new Book();      
      Novel n = new Novel(38);
      Random r = new Random();
      int i = 9;
      
      Object[] obj = {b, n, r, i};

      foreach(Object ob in obj){
        Console.WriteLine(ob.GetType());
      }
    }
  }
}