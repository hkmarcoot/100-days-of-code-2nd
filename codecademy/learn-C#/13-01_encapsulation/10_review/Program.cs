using System;

namespace Review
{
  class Program
  {
    static void Main(string[] args)
    {
      Console.WriteLine(Forest.ForestsCreated);
      Forest f = new Forest("forest one");
      Forest sf = new Forest("forest two");
      Console.WriteLine(Forest.ForestsCreated);
    }
  }
}
