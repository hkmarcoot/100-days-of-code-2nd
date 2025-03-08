using System;

namespace OverloadingConstructors
{
  class Program
  {
    static void Main(string[] args)
    {
      Forest f = new Forest("Congo", "Tropical");
      f.trees = 0;

      Forest sf = new Forest("Rendlesham");
      Console.WriteLine(sf.biome);
    }
  }
}
