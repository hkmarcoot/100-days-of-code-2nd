/* Task 1 */
SELECT * FROM customers LIMIT 10;
SELECT * FROM orders LIMIT 10;
SELECT * FROM books LIMIT 10;

/* Task 2 */
SELECT *
FROM pg_indexes
WHERE tablename = 'customers';

SELECT *
FROM pg_indexes
WHERE tablename = 'orders';

SELECT *
FROM pg_indexes
WHERE tablename = 'books';

/* Task 4 */
EXPLAIN ANALYZE SELECT
original_language, title, sales_in_millions
FROM books
WHERE original_language = 'French';

/* Task 5 */
SELECT pg_size_pretty (pg_total_relation_size('books'));

/* Task 9 */
SELECT NOW();

\COPY orders FROM 'orders_add.txt' DELIMITER ',' CSV HEADER;

SELECT NOW();

