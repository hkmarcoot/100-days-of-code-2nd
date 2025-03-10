using System;

namespace BiblioInheritance
{
  class Program
  {
    static void Main(string[] args)
    {
      /* Task 4 */
      Resource test = new Resource("This is title", "This is category");

      test.GetInfo();
      test.UpdateStatus();
      Console.WriteLine(test.Status);
      Console.WriteLine("\n");
          
      /* Task 8 */
      Book b = new Book("Code: The Hidden Language of Computer Hardware and Software", "Charles Petzold", "Non-Fiction", 396);

      b.GetInfo();
      Console.WriteLine("\n");
      
      /* Task 13 */
      Periodical p = new Periodical("Wired", "Technology", "Monthly");

      p.UpdateStatus();
      p.GetInfo();
      Console.WriteLine(p.Status);
      Console.WriteLine("\n");

      /* Task 18 */

      Video v = new Video("Ex Machina", "Sci-Fi", "Alex Garland", 108, "On-Demand");

      v.GetInfo();
    }
  }
}