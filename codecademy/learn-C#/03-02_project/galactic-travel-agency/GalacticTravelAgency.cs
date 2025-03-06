using System;

public class GalacticTravelAgency { 
  public static void Main(string[] args) {
    // Your code goes here
    string passengerName = "Zara";
    int passengerAge = 28;
    string ticketType = "First Class";
    string preferredPlanet = "Mars";
    Console.WriteLine(passengerName);
    Console.WriteLine(passengerAge + 1);
    Console.WriteLine(ticketType);
    Console.WriteLine(preferredPlanet);
    double passengerAgeDouble = (double)passengerAge;
    double passengerAgeDouble2 = passengerAge;
    string passengerAgeString = Convert.ToString(passengerAge);
  }
}