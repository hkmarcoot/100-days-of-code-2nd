using System;

namespace AccessModifiers
{
  class Program
  {
    static void Main(string[] args)
    {
      Forest f = new Forest("Congo", "Tropical");
      f.AnnounceForest();

      f.Grow();

      f.AnnounceForest();
    }
  }
}
