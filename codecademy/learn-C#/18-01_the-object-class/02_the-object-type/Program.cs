using System;

namespace TheObjectClass
{
  class Program
  {
    static void Main(string[] args)
    {
      Book bk = new Book();
      
      Novel nl = new Novel(38);
      
      int i = 9;
      
      Object bko = bk;
      Object nlo = nl;
      Object io = i;
    }
  }
}
