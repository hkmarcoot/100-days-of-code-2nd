using System;
using System.Collections.Generic;
using System.Linq;

namespace LearnLinq
{
  class Program
  {
    static void Main()
    {
      List<string> heroesList = new List<string> { "Zoe", "Liam", "Taryn", "Dorian", "Everett", "Marlena" };

      var heroes = heroesList.Where(hero => hero.Contains("v") || hero.Contains("y"));

      foreach(string hero in heroes){
        Console.WriteLine(hero);
      }
    }
  }
}
