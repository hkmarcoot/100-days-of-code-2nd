UPDATE mock.stock_prices
SET price_sh = price_sh + 10.00
WHERE trading_date > '2020-01-01'::date;

VACUUM mock.stock_prices;

SELECT pg_size_pretty(
    pg_total_relation_size('mock.stock_prices')
);
