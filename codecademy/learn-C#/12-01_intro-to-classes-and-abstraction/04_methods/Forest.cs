using System;

namespace Methods
{
  public class Forest
  {
    public string name;
    public int trees;
    public int age;
    public string biome;
    public int Grow(){
      trees += 30;
      age += 1;
      return trees;
    }
    public int Burn(){
      trees -= 20;
      age += 1;
      return trees;
    }
  }

}

