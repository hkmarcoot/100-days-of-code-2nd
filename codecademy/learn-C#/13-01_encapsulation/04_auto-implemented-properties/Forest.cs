using System;

namespace AutoImplementedProperties
{
  class Forest
  {
    public string Name
    {
      get; set;
    }

    public int Trees
    {
      get; set;
    }

    public int age;

    private string biome;
    public string Biome 
    {
      get {
        return biome;
      }
      set {
        string[] validBiomes = {"Tropical", "Temperate", "Boreal"};
        if (Array.IndexOf(validBiomes, value) >= 0) {
          biome = value;
        }
        else {
          biome = "Unknown";
        }
      }
    }
  }

}