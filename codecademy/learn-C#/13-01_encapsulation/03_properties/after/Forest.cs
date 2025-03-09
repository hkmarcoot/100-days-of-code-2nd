using System;

namespace Properties
{
  public class Forest
  {
    private string name;
    public int trees;
    public int age;
    private string biome;
    
    public string Name{
      get { return name; }
      set { name = value; }
    }

    public string Biome{
      get { return biome; }
      set {
        if(value == "Tropical"){
          biome = "Tropical";
        } else if ( value == "Temperate" ){
          biome = "Temperate";
        } else if (value == "Boreal"){
          biome = "Boreal";
        } else {
          biome = "Unknown";
        }
      }
    }
  }

}
