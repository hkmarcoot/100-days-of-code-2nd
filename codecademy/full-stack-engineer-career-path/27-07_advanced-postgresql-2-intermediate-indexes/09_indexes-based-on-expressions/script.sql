CREATE UNIQUE INDEX customers_email_address_lower_unique_idx ON customers(LOWER(email_address));

-- INSERT INTO customers (first_name, last_name, email_address)
-- VALUES ('John', 'Doe', 'ExaMPle@SampLE.COM'),
-- ('Jane','Doe','example@sample.com');