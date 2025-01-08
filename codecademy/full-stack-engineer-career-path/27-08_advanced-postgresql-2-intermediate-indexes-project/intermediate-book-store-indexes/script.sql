/* Task 1 */
SELECT * FROM customers LIMIT 10;
SELECT * FROM orders LIMIT 10;
SELECT * FROM books LIMIT 10;

/* Task 2 */
SELECT *
FROM pg_Indexes
WHERE tablename = 'customers';

SELECT *
FROM pg_Indexes
WHERE tablename = 'books';

SELECT *
FROM pg_Indexes
WHERE tablename = 'orders';

/* Task 3 */
EXPLAIN ANALYZE SELECT *
FROM orders
WHERE quantity > 18;

/* Task 6 */
ALTER TABLE customers
  ADD CONSTRAINT customers_pkey
    PRIMARY KEY (customer_id);

EXPLAIN ANALYZE SELECT *
FROM customers
WHERE customer_id < 100;

/* Task 7 */
CLUSTER customers USING customers_pkey;

SELECT * FROM customers ORDER BY customer_id LIMIT 10;

/* Task 8 */
CREATE INDEX customers_customer_id_book_id_idx ON orders (customer_id, book_id);

/* Task 9 */
DROP INDEX IF EXISTS customers_customer_id_book_id_idx;

CREATE INDEX orders_customer_id_book_id_quantity_idx ON orders (customer_id, book_id, quantity);

/* Task 10 */
CREATE INDEX books_author_title_idx ON books (author, title);

/* Task 11 */
EXPLAIN ANALYZE SELECT *
FROM orders
WHERE quantity * price_base > 100;

/* Task 12 */
CREATE INDEX orders_total_price_idx ON orders ((quantity * price_base));

/* Task 13 */
EXPLAIN ANALYZE SELECT *
FROM orders
WHERE quantity * price_base > 100;








