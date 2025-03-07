using System;

namespace CaesarCipher
{
  class Program
  {
    static void Main(string[] args)
    {
      char[] alphabet = new char[] {'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'};
      Console.Write("Input a secret message: ");
      string result = Console.ReadLine();
      char[] secretMessage = result.ToCharArray();
      char[] encryptedMessage = new char[secretMessage.Length];
      for(int i = 0; i < secretMessage.Length; i++){
        char letter = secretMessage[i];
        int index = Array.IndexOf(alphabet, letter);
        index = (index + 3) % 26;
        char encryptedChar = alphabet[index];
        encryptedMessage[i] = encryptedChar;   
      }
      string msgString = String.Join("", encryptedMessage);
        Console.WriteLine(msgString);
    }
  }
}