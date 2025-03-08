using System;

namespace Review
{
  class Program
  {
    static void Main(string[] args)
    {
      Forest f = new Forest("Amazon");
      Console.WriteLine(f.trees);
      f.Grow();
      Console.WriteLine(f.trees);
    }
  }
}
