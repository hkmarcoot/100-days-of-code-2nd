SELECT pg_size_pretty(
     pg_total_relation_size('mock.house_prices')
) as total_size;

UPDATE mock.house_prices 
SET  broker_id = 'GA'
WHERE broker_id = 'GE';

SELECT pg_size_pretty(
     pg_total_relation_size('mock.house_prices')
) as total_size;