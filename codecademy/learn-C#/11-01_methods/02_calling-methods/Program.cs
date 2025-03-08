using System;

namespace CallingMethods
{
  class Program
  {
    static void Main(string[] args)
    {
      string designer = "Anders Hejlsberg";
      Console.WriteLine(designer);
      int indexOfSpace = designer.IndexOf(" ");
      int indexOfSecondName = indexOfSpace + 1;
      string secondName = designer.Substring(indexOfSecondName);
      Console.WriteLine(secondName);
    }
  }
}
