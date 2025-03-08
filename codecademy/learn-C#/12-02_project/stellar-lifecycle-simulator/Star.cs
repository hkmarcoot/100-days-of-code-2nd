using System;

namespace StarLifecycleSimulator
{
  public class Star
  {
    string name;
    string type;
    int age;
    double brightness;

    public Star(string name, string type){
      this.name = name;
      this.type = type;
      this.age = 0;
      this.brightness = 1.0;
    }

    public Star(string name) : this(name, "Unknown"){
      Console.WriteLine("Star type set to default: Unknown.");
    }

    public void Shine(){
      Console.WriteLine($"Star {this.name} is shining with brightness {this.brightness}.");
    }

    public void GrowOlder(){
      this.age += 1;
      this.brightness *= 0.9;
    }

    public void Supernova(){
      this.brightness = 0;
      Console.WriteLine($"Star {this.name} has exploded in a supernova.");
    }
  }
}