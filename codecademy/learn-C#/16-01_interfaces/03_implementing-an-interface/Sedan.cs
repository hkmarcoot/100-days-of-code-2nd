using System;

namespace LearnInterfaces
{
  class Sedan : IAutomobile
  {
    public string LicensePlate
    { get; }

    public double Speed
    { get; }

    public int Wheels
    { get; }
    
    public void Honk(){
      Console.WriteLine("Honk!");
    }
  }
}