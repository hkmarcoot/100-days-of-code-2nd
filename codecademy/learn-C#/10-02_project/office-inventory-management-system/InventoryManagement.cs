using System;
using System.Collections.Generic;

public class InventoryManagement
{
  public static void Main(string[] args){
    // Your code goes here
  List<string> inventoryList = new List<string> {"Printer", "Laptop", "Desk Chair", "Monitor", "Keyboard"};
  Console.WriteLine(inventoryList.Count);
  bool hasDeskChair = inventoryList.Contains("Desk Chair");
  Console.WriteLine(hasDeskChair);
  bool removed = inventoryList.Remove("Printer");
  Console.WriteLine(removed);
  foreach(string item in inventoryList){
    Console.WriteLine(item);
  }
  List<string> newItems = new List<string> {"Mouse", "Desk Lamp"};
  inventoryList.AddRange(newItems);
  Console.WriteLine("\n");
  foreach(string item in inventoryList){
    Console.WriteLine(item);
  }
  inventoryList.RemoveRange(4, 2);
  Console.WriteLine("\n");
  foreach(string item in inventoryList){
    Console.WriteLine(item);
  }
  List<string> topInventory = inventoryList.GetRange(0, 3);
  Console.WriteLine("\n");
  foreach(string item in topInventory){
    Console.WriteLine(item);
  }
  }
}