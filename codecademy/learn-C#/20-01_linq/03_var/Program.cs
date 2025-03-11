using System;
using System.Collections.Generic;
using System.Linq;

namespace LearnLinq
{
  class Program
  {
    static void Main()
    {
      List<string> heroes = new List<string> { "Zoe", "Liam", "Taryn", "Dorian", "Everett", "Marlena" };
      
      var shortHeroes = from h in heroes
                      where h.Length < 7
                      select h;

      foreach (string hero in shortHeroes){
        Console.WriteLine(hero);
      }

      var longHeroes = heroes.Where(n => n.Length >= 7);
      Console.WriteLine(longHeroes.Count());
    }
  }
}
