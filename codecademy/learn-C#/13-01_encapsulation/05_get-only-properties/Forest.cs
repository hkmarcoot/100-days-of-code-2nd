using System;

namespace GetOnlyProperties
{
  class Forest
  {
    public int age;
    public int Age{
      get { return age; }
      private set { age = value; }
    }
    
    public string Name
    { get; set; }

    public int Trees
    { get; set; }

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