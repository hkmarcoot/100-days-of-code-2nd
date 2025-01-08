We covered:

- What an index is and how they function.
- How to see what indexes exist on a table

```
SELECT \*
FROM pg_indexes
WHERE tablename = '<table_name>';
```

- EXPLAIN ANALYZE can be a powerful tool to see how your queries are impacted by an index.
- How to build an index

```
CREATE INDEX <index_name> ON <table_name> (column_name);
```

- Multicolumn indexes allow for more than one column to be used in combination as an index on a table

```
CREATE INDEX <index_name> ON <table_name> (<column_name1>, <column_name2>...);
```

- You can drop an index. This might be useful to do if you are modifying a large number of records on an indexed table.

```
DROP INDEX IF EXISTS <index_name>;
```

- To see the size of a database table you can run the script

```
SELECT pg_size_pretty (pg_total_relation_size('<table_name>'));
```

- Some of the benefits and burdens of indexes:
  - Increase in speed of searches/filtering
  - Increase in storage space
  - Increase in runtime for Insert/Update/Delete on impacted indexes.
