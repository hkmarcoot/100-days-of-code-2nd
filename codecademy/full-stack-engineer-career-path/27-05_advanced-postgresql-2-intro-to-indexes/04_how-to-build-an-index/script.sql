CREATE INDEX customers_city_idx ON customers (city);

SELECT *
FROM pg_Indexes
WHERE tablename = 'customers';