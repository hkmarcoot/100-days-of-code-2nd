using System;

namespace BasicClasses
{
  class Program
  {
    static void Main(string[] args)
    {
      Forest f = new Forest();
      f.name = "Mar";
      f.biome = "Africa";
      f.trees = 1000;
      f.age = 20;
      Console.WriteLine(f.name);
    }
  }
}
