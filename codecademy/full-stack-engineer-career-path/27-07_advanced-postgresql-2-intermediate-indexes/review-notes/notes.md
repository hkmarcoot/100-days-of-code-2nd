We covered:

- How to build a partial index

```
CREATE INDEX <index_name> ON <table_name> (<column_name>)
WHERE <condition>;
```

- How to improve the speed of ordering data
- The Relationship between:
  - Primary keys and unique indexes
  - Unique constraints and unique indexes.
- What a clustered index is and how to refresh one

```
CLUSTER <table_name> USING <index_name>;
```

- How non-clustered indexes work.
- Index-only scans
- Combining indexes vs multicolumn indexes
- Indexes based on expressions

```
CREATE INDEX <index_name> ON <table_name>(<EXP>(<column_name>));
```
