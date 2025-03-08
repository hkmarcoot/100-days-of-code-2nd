using System;

namespace MethodOverloading
{
  class Program
  {
    static void IntroduceFriends(string name1, string name2){
       Console.WriteLine($"These are my friends, {name1} and {name2}!");
    }
    static void IntroduceFriends(string name1, string name2, string name3){
       Console.WriteLine($"These are my friends, {name1}, {name2}, and {name3}!");
    }
    static void IntroduceFriends(){
      Console.WriteLine("There is no one who needs to be introduced.");
    }
    static void Main(string[] args)
    {
      IntroduceFriends("Tom", "May");
      IntroduceFriends("Tom", "May", "Tim");
      IntroduceFriends();
    }
    
  }
}
