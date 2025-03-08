using System;

namespace OutParameters
{
  class Program
  {
    static string Whisper(string phrase, out bool wasWhisperCalled){
      wasWhisperCalled = true;
      return phrase.ToLower();
    }
    static void Main(string[] args)
    {
      string scoreAsString = "85.6";
      string statement = "Hello World";
      bool outcome;
      double scoreAsDouble;
      outcome = Double.TryParse(scoreAsString, out scoreAsDouble);
      Console.WriteLine(outcome);
      Console.WriteLine(scoreAsDouble);

      string whispered = Whisper(statement, out bool marker);
      Console.WriteLine(whispered);
      Console.WriteLine(marker);
    }  
	}
}