using System;

namespace BiblioInheritance
{
  class Book : Resource
  {
    public string Author;
    public int PageCount;

    public Book(string title, string category, string author, int pageCount) : base(title, category){
      Author = author;
      PageCount = pageCount;
    }
  }
}