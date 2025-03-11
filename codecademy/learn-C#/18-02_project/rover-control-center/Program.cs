using System;

namespace RoverControlCenter
{
  class Program
  {
    static void Main(string[] args)
    {
      MoonRover lunokhod = new MoonRover("Lunokhod 1", 1970);
      MoonRover apollo = new MoonRover("Apollo 15", 1971);
      MarsRover sojourner = new MarsRover("Sojourner", 1997);
      Satellite sputnik = new Satellite("Sputnik", 1957); 
  		
      Rover[] rovers = {lunokhod, apollo, sojourner};

      /* Task 3 */
      // DirectAll(rovers);

      Object[] probes = {lunokhod, apollo, sojourner, sputnik};

      /* Task 5 */
      foreach(Object probe in probes){
        Console.WriteLine($"Tracking a {probe.GetType()}");
      }

      /* Task 8 */
      IDirectable[] directables = {lunokhod, apollo, sojourner, sputnik};

      /* Task 9 */
      DirectAll(directables);
    }
      
    /* Task 3 */
    // public static void DirectAll(Rover[] rovers){
    //   foreach(Rover rover in rovers){
    //     Console.WriteLine(rover.GetInfo());
    //     Console.WriteLine(rover.Explore());
    //     Console.WriteLine(rover.Collect());
    //     Console.Write("\n");
    //   }
    // }

    /* Task 9 */
    public static void DirectAll(IDirectable[] directables){
      foreach(IDirectable directable in directables){
        Console.WriteLine(directable.GetInfo());
        Console.WriteLine(directable.Explore());
        Console.WriteLine(directable.Collect());
        Console.Write("\n");
      }
    }
  }
}
