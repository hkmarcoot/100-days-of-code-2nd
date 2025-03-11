using System;
using System.Collections.Generic;
using System.Linq;

namespace LearnLinq
{
  class Program
  {
    static void Main()
    {
      string[] heroes = { "Zoe", "Liam", "Taryn", "Dorian", "Everett", "Marlena" };

      var heroesWithI = heroes.Where(hero => hero.Contains("i"));

      foreach(string hero in heroesWithI){
        Console.WriteLine(hero);
      }
    }
  }
}
