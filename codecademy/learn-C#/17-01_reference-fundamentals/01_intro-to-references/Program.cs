using System;

namespace LearnReferences
{
  class Program
  {
    static void Main(string[] args)
    {
      Encyclopedia enc1 = new Encyclopedia();
			Encyclopedia enc2 = enc1;
			enc1.CurrentPage = 0;
			enc2.CurrentPage = 16;
			Console.WriteLine(enc1.CurrentPage);
			Console.WriteLine(enc2.CurrentPage);
    }
  }
}
