SELECT * FROM book;
SELECT * FROM chapter;

SELECT book.title AS book, chapter.title AS chapters
FROM book, chapter
WHERE book.isbn = chapter.book_isbn;

-- or
-- SELECT book.title AS book, chapter.title AS chapters
-- FROM book
-- JOIN chapter
-- ON book.isbn = chapter.book_isbn;