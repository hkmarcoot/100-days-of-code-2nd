using System;

namespace Return
{
  class Program
  {
    static string DecoratePlanet(string str){
      return $"*.*.* {str} *.*.*";
    }
    static void Main(string[] args)
    {
      DecoratePlanet("Mars");
      Console.WriteLine(DecoratePlanet("Jupiter"));
    }
    
	}
}
