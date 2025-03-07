using System;

namespace SpaceMission
{
  class Program
  {
    static void Main(string[] args)
    {
      // Your code goes here
      string[] spaceInventory;
      spaceInventory = new string[] {"Space Suits", "Oxygen Tanks", "Food Supplies", "Medical Kits", "Communication Devices", "Fuel Canisters", "Navigation Tools", "Repair Tools"};
      int[] itemQuantities = {10, 8, 15, 5, 6, 9, 4, 7};
      if(spaceInventory.Length == 8){
        Console.WriteLine("Space Inventory is ready to go!");
      } else if (spaceInventory.Length > 8){
        Console.WriteLine("Too many items!");
      } else {
        Console.WriteLine("Add More items!");
      }
      Console.WriteLine(spaceInventory[1]);
      Console.WriteLine(itemQuantities[1]);
      spaceInventory[7] = "Scientific Instruments";
      itemQuantities[7] = 5;
      int fiveItem = Array.IndexOf(itemQuantities, 5);
      Console.WriteLine($"The first item with quantity 5 is at position {fiveItem}.");
      Array.Reverse(spaceInventory);
      Console.WriteLine(spaceInventory[0]);
      Console.WriteLine(spaceInventory[7]);
      Array.Sort(spaceInventory);
      Console.WriteLine(spaceInventory[0]);
      Console.WriteLine(spaceInventory[7]);
    }
  }
}