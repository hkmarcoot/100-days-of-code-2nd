CREATE INDEX customers_last_name_idx ON customers (last_name);

SELECT *
FROM pg_Indexes
WHERE tablename = 'customers';
