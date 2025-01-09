Some of the tools you can take with you include:

- How an UPDATE or DELETE creates dead tuples on disk. You also now have the ability to write queries to track disk usage of a table or index and assess the effect of dead tuples on a table.
- An understanding of when to VACUUM, VACUUM ANALYZE, or VACUUM FULL. Each can be used to use database space more efficiently when appropriate.
  - VACUUM simply marks dead tuples and allows that space to be re-used by future updates.
  - VACUUM ANALYZE performs a VACUUM, but also updates PostgreSQL’s internal statistics and can help further improve query performance after a large UPDATE.
  - VACUUM FULL is the most aggressive VACUUM strategy, it can completely clear dead tuples from a table and return the space to disk. However, it should be used sparingly as it can prevent other users from querying the table.
- Awareness of the autovacuum process, which automatically runs periodic VACCUUMs to keep database tables disk usage efficient.
- The ability to interpret data from pg_stat_all_tables. This is a very handy table. Being able to reference it to understand disk usage, vacuum frequency, or dead tuple count will allow you to diagnose a wide variety of database performance problems.
- An understanding of when TRUNCATE can be used in place of more expensive alternatives.
