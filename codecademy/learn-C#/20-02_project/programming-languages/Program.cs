using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace ProgrammingLanguages
{
  class Program
  {
    static void Main()
    {
      List<Language> languages = File.ReadAllLines("./languages.tsv")
        .Skip(1)
        .Select(line => Language.FromTsv(line))
        .ToList();

      /* Task 1 */
      // foreach(var lang in languages){
      //   Console.WriteLine(lang.Prettify());
      // }

      /* Task 2 */
      // var langs = languages.Select(lang => $"{lang.Year}, {lang.Name}, {lang.ChiefDeveloper}");

      // foreach(string lang in langs){
      //   Console.WriteLine(lang);
      // }

      /* Task 3 */
      // var langs = languages.Where(lang => lang.Name == "C#");

      // foreach(var lang in langs){
      //   Console.WriteLine(lang.Prettify());
      // }

      /* Task 4 */
      // var langs = languages.Where(lang => lang.ChiefDeveloper.Contains("Microsoft"));

      // foreach(var lang in langs){
      //   Console.WriteLine(lang.Prettify());
      // }

      /* Task 5 */
      // var langs = languages.Where(lang => lang.Predecessors.Contains("Lisp"));

      // foreach(var lang in langs){
      //   Console.WriteLine(lang.Prettify());
      // }

      /* Task 6 */
      // var langs = languages.Where(lang => lang.Name.Contains("Script")).Select(lang => lang.Name);

      // foreach(var lang in langs){
      //   Console.WriteLine(lang);
      // }

      /* Task 7 */
      // Console.WriteLine(languages.Count());

      /* Task 8 */
      // var lang = languages.Where(lang => lang.Year >= 1995 && lang.Year <= 2005).Count();

      // Console.WriteLine(lang);

      /* Task 9 */
      var langs = languages.Where(lang => lang.Year >= 1995 && lang.Year <= 2005).Select(lang => $"{lang.Name} was invented in {lang.Year}");

      foreach(string lang in langs){
        Console.WriteLine(lang);
      }

      
    }

      /* Task 10 */
      public static void PrettyPrintAll(IEnumerable<Language> langs){
        foreach (var lang in langs)
        {
        Console.WriteLine(lang.Prettify());
        }
      }

      /* Task 11 */
      public static void PrintAll(IEnumerable<Object> sequence){
        foreach (var item in sequence)
        {
        Console.WriteLine(item);
        }
      }
  }
}
