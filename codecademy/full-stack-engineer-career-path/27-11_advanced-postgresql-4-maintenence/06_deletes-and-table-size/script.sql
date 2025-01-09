SELECT pg_size_pretty(
    pg_total_relation_size('mock.stock_prices')
) as total_size;

DELETE FROM mock.stock_prices
WHERE day_id IN (5, 6);

SELECT pg_size_pretty(
    pg_total_relation_size('mock.stock_prices')
) as total_size;

ANALYZE mock.stock_prices;

SELECT relname, n_dead_tup, n_live_tup
FROM pg_stat_all_tables 
WHERE relname = 'stock_prices';
