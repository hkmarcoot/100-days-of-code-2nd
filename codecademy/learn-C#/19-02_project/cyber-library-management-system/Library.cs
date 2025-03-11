using System;
using System.Collections.Generic;

namespace LibraryManagementSystem
{
  class Library 
  {
    private List<Book> books = new List<Book>();

    public void AddBook(Book b){
      books.Add(b);
    }

    public List<Book> SearchBooksByTitle(string title){
      List<Book> matchingBooks = new List<Book>();
      foreach (Book book in books) {
        if (book.Title.Contains(title)) {
            matchingBooks.Add(book);
        }
      }
      return matchingBooks;
    }

    public void DisplayAllBooks(){
      foreach(Book book in books){
        Console.WriteLine($"{book}\n");
      }
    }
  }
}