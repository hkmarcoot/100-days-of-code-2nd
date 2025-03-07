using System;

namespace TrueOrFalse
{
  class Program
  {
		static void Main(string[] args)
    {
      // Do not edit these lines
      Console.WriteLine("Welcome to 'True or False?'\nPress Enter to begin:");
      string entry = Console.ReadLine();
      Tools.SetUpInputStream(entry);

      // Type your code below
      string[] questions = {"Question 1", "Question 2", "Question 3"};
      bool[] answers = {true, false, true};
      bool[] responses = new bool[3];
      if(questions.Length != answers.Length){
        Console.WriteLine("Warning! questions.Length doesn't equal answers.Length.");
      }
      int askingIndex = 0;
      foreach(string question in questions){
        string input;
        bool isBool;
        bool inputBool;
        Console.WriteLine(question);
        Console.WriteLine("True or false?");
        input = Console.ReadLine();
        input.ToLower();
        if(input == "true" || input == "false"){
          isBool = true;
        } else {
          isBool = false;
        }
        while(isBool == false){
          Console.WriteLine("Please respond with 'true' or 'false'");
          input = Console.ReadLine();
          input.ToLower();
          if(input == "true" || input == "false"){
            isBool = true;
          } else {
            isBool = false;
          }
        }
        if(input == "true"){
          inputBool = true;
        } else {
          inputBool = false;
        }
        responses[askingIndex] = inputBool;
        askingIndex++;
      }
      foreach(bool item in responses){
        Console.WriteLine(item);
      }
      int scoringIndex = 0;
      int score = 0;
      foreach(bool answer in answers){
        bool temp = responses[scoringIndex];
        Console.WriteLine($"{scoringIndex+1}. Input: {temp} | Answer: {answer}");
        if(temp == answer){
          score++;
        }
        scoringIndex++;
      }
      Console.WriteLine($"You got {score} out of {questions.Length} correct!");
    }
  }
}
