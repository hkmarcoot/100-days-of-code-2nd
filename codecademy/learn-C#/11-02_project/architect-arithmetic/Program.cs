using System;

namespace ArchitectArithmetic
{
  class Program
  {
    static double rectangle(double length, double width){
      return length * width;
    }
    static double circle(double radius){
      return Math.PI * radius * radius;
    }
    static double triangle(double bottom, double height){
      return 0.5 * bottom * height;
    }
    public static void Main(string[] args)
    {
      Console.WriteLine(rectangle(4, 5));
      Console.WriteLine(circle(4));
      Console.WriteLine(triangle(10, 9));
      Console.WriteLine("\n");
      
      Console.WriteLine(rectangle(2500, 1500));
      Console.WriteLine(circle(375) / 2);
      Console.WriteLine(triangle(750, 500));
      double area = rectangle(2500, 1500) + (circle(375) / 2) + triangle(750, 500);
      Console.WriteLine(area);
      double cost = area * 180;
      cost = Math.Round(cost, 2);
      Console.WriteLine($"My plan costs: {cost} pesos");

    }
  }
}
