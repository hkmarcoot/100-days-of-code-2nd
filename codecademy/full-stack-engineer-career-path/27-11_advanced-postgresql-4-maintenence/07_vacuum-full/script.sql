SELECT pg_size_pretty(
    pg_total_relation_size('mock.orders')
) as total_size;

select relname, n_live_tup, n_dead_tup , last_vacuum
from pg_catalog.pg_stat_all_tables
where relname = 'orders';

VACUUM FULL mock.orders;

SELECT pg_size_pretty(
    pg_total_relation_size('mock.orders')
) as total_size;