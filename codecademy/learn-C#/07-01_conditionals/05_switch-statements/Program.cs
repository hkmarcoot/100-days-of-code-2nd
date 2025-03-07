using System;

namespace SwitchStatement
{
  class Program
  {
    static void Main(string[] args)
    {
      double ph = 14;
      switch (ph){
        case <= 3:
          Console.WriteLine("Very Acidic");
          break;
        case < 7:
          Console.WriteLine("Acidic");
          break;
        case >= 11:
          Console.WriteLine("Very Basic");
          break;
        case > 7:
          Console.WriteLine("Basic");
          break;
        default:
          Console.WriteLine("Neutral");
          break;
      }

      /*
      if (ph < 7)
      {
        Console.WriteLine("Acidic");
      }
      else if (ph > 7)
      {
        Console.WriteLine("Basic");
      }
      else 
      {
        Console.WriteLine("Neutral");
      }
      */

    }
  }
}
