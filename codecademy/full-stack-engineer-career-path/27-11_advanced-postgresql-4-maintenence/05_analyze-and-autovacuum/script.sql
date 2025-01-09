SELECT schemaname,
    relname, 
    last_vacuum,
    last_autovacuum, 
    last_analyze
FROM pg_stat_all_tables 
WHERE relname = 'orders';

ANALYZE mock.orders;

SELECT schemaname,
    relname, 
    last_vacuum,
    last_autovacuum, 
    last_analyze
FROM pg_stat_all_tables 
WHERE relname = 'orders';