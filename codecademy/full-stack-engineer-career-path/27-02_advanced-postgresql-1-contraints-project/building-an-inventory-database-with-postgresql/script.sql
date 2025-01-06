/* Task 1 */
SELECT *
FROM parts
LIMIT 10;

/* Task 2 */
ALTER TABLE parts
ALTER COLUMN code SET NOT NULL;

ALTER TABLE parts
ADD UNIQUE(code);

/* Task 3 */
UPDATE parts
SET description = 'None Available'
WHERE description IS NULL OR description = ' ';

SELECT *
FROM parts
LIMIT 10;

/* Task 4 */
ALTER TABLE parts
ALTER COLUMN description SET NOT NULL;

/* Task 5 */
INSERT INTO parts (id, description, code, manufacturer_id) VALUES (54, 'Testing', 'V1-009', 9);

/* Task 6 */
ALTER TABLE reorder_options
ALTER COLUMN price_usd SET NOT NULL;

ALTER TABLE reorder_options
ALTER COLUMN quantity SET NOT NULL;

/* Task 7 */
ALTER TABLE reorder_options
ADD CHECK (price_usd > 0 AND quantity > 0);

/* Task 8 */
ALTER TABLE reorder_options
ADD CHECK (price_usd/quantity > 0.02 AND price_usd/quantity < 25);

/* Task 9 */
ALTER TABLE parts
ADD PRIMARY KEY (id);

ALTER TABLE reorder_options
ADD FOREIGN KEY (part_id) REFERENCES parts (id);

/* Task 10 */
ALTER TABLE locations 
ADD CHECK (qty > 0); 

/* Task 11 */
ALTER TABLE locations
ADD UNIQUE (part_id, location);

/* Task 12 */
ALTER TABLE locations
ADD FOREIGN KEY (part_id) REFERENCES parts (id);

/* Task 13 */
ALTER TABLE parts
ADD FOREIGN KEY (manufacturer_id) REFERENCES manufacturers (id);

/* Task 14 */
INSERT INTO manufacturers(name, id) 
VALUES ('Pip-NNC Industrial', 11);

/* Task 15 */
SELECT * FROM manufacturers;
SELECT * FROM parts ORDER BY id;

UPDATE parts
SET manufacturer_id = 11
WHERE manufacturer_id = 1 OR manufacturer_id = 2;

SELECT * FROM parts ORDER BY id;

