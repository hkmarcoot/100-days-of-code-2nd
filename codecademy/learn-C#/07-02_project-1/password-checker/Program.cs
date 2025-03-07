using System;

namespace PasswordChecker
{
  class Program
  {
    public static void Main(string[] args)
    {
      int minLength = 8;
      string uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      string lowercase = "abcdefghijklmnopqrstuvwxyz";
      string digits = "0123456789";
      string specialChars = "!@#$%^&*?~";
      Console.WriteLine("Please enter a password: ");
      string input = Console.ReadLine();
      int score = 0;
      if (input.Length >= minLength){
        score += 1;
      }
      if(Tools.Contains(input, uppercase)){
        score += 1;
      }
      if(Tools.Contains(input, lowercase)){
        score += 1;
      }
      if(Tools.Contains(input, digits)){
        score += 1;
      }
      if(Tools.Contains(input, specialChars)){
        score += 1;
      }
      switch (score){
        case 1:
          Console.WriteLine("The password is weak");
          break;
        case 2:
          Console.WriteLine("The password is medium");
          break;
        case 3:
          Console.WriteLine("The password is strong");
          break;
        case 4:
          Console.WriteLine("The password is extremely strong");
          break;
        default:
          Console.WriteLine("The password doesn't meet any of the standards");
          break;
      }
    }
  }
}
