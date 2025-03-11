using System;
using System.Collections.Generic;

namespace LibraryManagementSystem{
  class Program {
    static void Main() {
      // Initialize library
      Library library = new Library();

      // Add some sample books
      Book b1 = new Book();
      Book b2 = new Book();
      b1.Title = "1984";
      b1.Author = "George Orwell";
      b2.Title = "To Kill a Mockingbird";
      b2.Author = "Harper Lee";

      library.AddBook(b1);
      library.AddBook(b2);

      // Search for a book
      List<Book> results = library.SearchBooksByTitle("1984");

      // Display all books
      foreach(Book book in results){
        Console.WriteLine($"Title: {book.Title}, Author: {book.Author}");
      }
    }
  }
}
