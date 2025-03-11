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

      var transformedHeroes = heroes.Select(hero => $"Introducing...{hero}!");

      var indices = from hero in heroes
                    where hero.Contains("i")
                    select hero.IndexOf("i");

      foreach(string hero in transformedHeroes){
        Console.WriteLine(hero);
      }

      foreach(int indice in indices){
        Console.WriteLine(indice);
      }
    }
  }
}
