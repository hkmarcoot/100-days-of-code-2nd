/* Task 1 */
SELECT * FROM store LIMIT 10;

/* Task 2 */
SELECT COUNT(DISTINCT(order_id)) 
FROM store;

SELECT COUNT(DISTINCT(customer_id)) 
FROM store;

/* Task 3 */
SELECT customer_id, customer_email, customer_phone
FROM store
WHERE customer_id = 1;

/* Task 4 */
SELECT item_1_id, item_1_name, item_1_price
FROM store
WHERE item_1_id = 4;

/* Task 5 */
CREATE TABLE customers AS
SELECT DISTINCT customer_id, customer_phone, customer_email
FROM store;

/* Task 6 */
ALTER TABLE customers
ADD PRIMARY KEY (customer_id);

/* Task 7 */
CREATE TABLE items AS
SELECT DISTINCT item_1_id as item_id, item_1_name as name, item_1_price as price 
FROM store
UNION
SELECT DISTINCT item_2_id as item_id, item_2_name as name, item_2_price as price
FROM store
WHERE item_2_id IS NOT NULL
UNION
SELECT DISTINCT item_3_id as item_id, item_3_name as name, item_3_price as price
FROM store
WHERE item_3_id IS NOT NULL;


/* Task 8 */
ALTER TABLE items
ADD PRIMARY KEY (item_id);

/* Task 9 */
CREATE TABLE orders_items AS
SELECT order_id, item_1_id as item_id 
FROM store
WHERE item_1_id IS NOT NULL
UNION ALL
SELECT order_id, item_2_id as item_id
FROM store
WHERE item_2_id IS NOT NULL
UNION ALL
SELECT order_id, item_3_id as item_id
FROM store
WHERE item_3_id IS NOT NULL;

SELECT * FROM orders_items ORDER BY item_id LIMIT 5;

/* Task 10 */
CREATE TABLE orders AS
SELECT order_id, order_date, customer_id
FROM store;

/* Task 11 */
ALTER TABLE orders
ADD PRIMARY KEY (order_id);

/* Task 12 */
ALTER TABLE orders
ADD FOREIGN KEY (customer_id) 
REFERENCES customers(customer_id);

ALTER TABLE orders_items
ADD FOREIGN KEY (item_id) 
REFERENCES items(item_id);

/* Task 13 */
ALTER TABLE orders_items
ADD FOREIGN KEY (order_id) 
REFERENCES orders(order_id);

/* Task 14 */
SELECT customer_email
FROM store
WHERE order_date > '2019-08-25';

/* Task 15 */
SELECT customer_email
FROM customers, orders
WHERE customers.customer_id = orders.customer_id
AND
orders.order_date > '2019-08-25';

/* Task 16 */
WITH all_items AS (
SELECT item_1_id as item_id 
FROM store
UNION ALL
SELECT item_2_id as item_id
FROM store
WHERE item_2_id IS NOT NULL
UNION ALL
SELECT item_3_id as item_id
FROM store
WHERE item_3_id IS NOT NULL
)
SELECT item_id, COUNT(*)
FROM all_items
GROUP BY item_id
ORDER BY item_id;

/* Task 17 */
SELECT item_id, COUNT(order_id)
FROM orders_items
GROUP BY item_id
ORDER BY item_id;





