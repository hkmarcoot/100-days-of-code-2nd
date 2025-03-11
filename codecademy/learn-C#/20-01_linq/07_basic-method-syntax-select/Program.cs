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

      var HeroesWithR = heroes.Where(hero => hero.Contains("r"));
      var lowerHeroesWithR = HeroesWithR.Select(hero => hero.ToLower());
      
      var sameResult = heroes.Where(hero => hero.Contains("r")).Select(hero => hero.ToLower());

      foreach (string hero in sameResult){
        Console.WriteLine(hero);
      }
    }
  }
}
