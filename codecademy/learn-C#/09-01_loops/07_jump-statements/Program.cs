using System;

namespace JumpStatements
{
  class Program
  {
    static void Main(string[] args)
    {
      bool buttonClick = false;
      int count = 0;
      do
      {
        Console.WriteLine("BLARRRRR");
        count++;
        if(count == 3){
          break;
        }
      } while(!buttonClick);
    }
  }
}
