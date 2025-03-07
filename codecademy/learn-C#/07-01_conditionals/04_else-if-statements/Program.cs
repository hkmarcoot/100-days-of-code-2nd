using System;

namespace ElseIfStatement
{
  class Program
  {
    static void Main(string[] args)
    {
      double ph = 7.0;
      if(ph < 7){
        Console.WriteLine("Acidic");
      } else if(ph > 7){
        Console.WriteLine("Basic");
      } else {
        Console.WriteLine("Neutral");
      }
      
    }
  }
}
