EXPLAIN ANALYZE SELECT *
FROM customers
WHERE last_name = 'Jones' AND first_name = 'David';

CREATE INDEX customers_last_name_first_name_idx ON customers (last_name, first_name);

EXPLAIN ANALYZE SELECT *
FROM customers
WHERE last_name = 'Jones' AND first_name = 'David';