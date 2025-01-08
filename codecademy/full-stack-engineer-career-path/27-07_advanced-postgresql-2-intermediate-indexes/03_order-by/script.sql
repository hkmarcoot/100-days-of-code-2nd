-- SELECT
--     user_name,
--     date_time
-- FROM logins
-- WHERE date_time >= (NOW() - INTERVAL'1 month')
-- ORDER BY date_time DESC;

-- CREATE INDEX logins_date_time_idx ON logins (date_time DESC, user_name);

CREATE INDEX customers_state_name_email_address_idx ON customers(state_name, email_address);

EXPLAIN ANALYZE SELECT state_name, email_address
FROM customers
WHERE state_name = 'California' OR state_name = 'Ohio'
ORDER BY state_name DESC, email_address;

CREATE INDEX customers_state_name_email_address_ordered_idx ON customers(state_name DESC, email_address);

EXPLAIN ANALYZE SELECT state_name, email_address
FROM customers
WHERE state_name = 'California' OR state_name = 'Ohio'
ORDER BY state_name DESC, email_address;
