As a database user, you can use the following functions to check the size of a relation in a database.

- pg_total_relation_size will return the size of the table and all its indexes in bytes. These values are often in the millions or billions and thus hard to read.
- pg_table_size and pg_indexes_size return the size of the table’s data and table’s indexes in bytes. The sum of these two functions is equal to pg_total_relation_size
- pg_size_pretty can be used with the functions above to format a number in bytes as KB, MB, or GB.

All of the logic to get the table or index size is in the function itself, although PostgreSQL does store table size in specific internal tables, you can simply write a statement like SELECT pg_table_size(table_name); to get a table’s size. Let’s look into an example using the table time_series.

```
SELECT
    pg_size_pretty(pg_table_size('time_series')) as tbl_size,
    pg_size_pretty(pg_indexes_size('time_series')) as idx_size,
    pg_size_pretty(pg_total_relation_size('time_series')) as total_size;
```

Because indexes are relations in their own right, you can also call pg_total_relation_size on a single index to get the size of the index. For example, if we know that time_series has an index named pk_mocked_data, we can check the total relation size of that index with the following.

```
SELECT pg_size_pretty(
     pg_total_relation_size('pk_mocked_data')
) as idx_size;
```
