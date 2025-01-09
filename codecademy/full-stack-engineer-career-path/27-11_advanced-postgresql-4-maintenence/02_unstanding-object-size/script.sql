SELECT pg_size_pretty(
     pg_table_size('mock.house_prices')
) as tbl_size;

SELECT pg_size_pretty(
     pg_indexes_size('mock.house_prices')
) as idx_size;

SELECT pg_size_pretty(
     pg_total_relation_size('mock.house_prices_pk')
) as total_pk_size;

SELECT pg_size_pretty(pg_total_relation_size('mock.house_prices')) as total_size;
