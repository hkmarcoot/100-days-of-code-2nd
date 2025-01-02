SELECT * FROM book;
SELECT * FROM author;

INSERT INTO books_authors VALUES (
  '123457890',
  'jkey@db.com'
);

INSERT INTO books_authors VALUES (
  '123457890',
  'cindex@db.com'
);

INSERT INTO books_authors VALUES (
  '987654321',
  'cindex@db.com'
);

-- SELECT
--     book.title as book_title, author.name as author_name, book.description as book_description
-- FROM
--     book, author, books_authors
-- WHERE book.isbn = books_authors.book_isbn
-- AND author.email = books_authors.author_email;

SELECT book.title as book_title, author.name as author_name, book.description as book_description
FROM book
INNER JOIN books_authors
ON book.isbn = books_authors.book_isbn
INNER JOIN author
ON author.email = books_authors.author_email;

SELECT
    author.name as author_name, author.email as author_email, book.title as book_title
FROM
    book, author, books_authors
WHERE book.isbn = books_authors.book_isbn
AND author.email = books_authors.author_email;



