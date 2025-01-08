Here are some possible indexes you might want to create. Again this is a thought experiment, so there isn’t a right or wrong answer, so feel free to come up with your own ideas, just make sure you are considering the pros and cons of indexes.

The first thing you will want to do is check what indexes currently exist. Over the course of this project you have created and removed several indexes, so it doesn’t hurt to get an updated list

```
SELECT *
FROM pg_indexes
WHERE tablename IN ('customers', 'books', 'orders')
ORDER BY tablename, indexname;
```

Next we dropped possibly unneeded indexes. For instance, searches will most likely be done for an author and a title, not just an author, so having just an author-only index is probably not needed. You could also drop the title index and create a title-and-author combined index. But realistically, the size of this particular database doesn’t come near to needing this index.

```
DROP INDEX IF EXISTS books_author_idx;
```

Next, the index for customer_id, quantity is probably redundant with customer_id, book_id, quantity.

```
DROP INDEX IF EXISTS orders_customer_id_quantity;
```

Let’s think about an index that we might want to add! The customers table would most likely need contact information regularly searched on, so we could see last_name, first_name, email_address (probably in that order) being useful

```
CREATE INDEX customers_last_name_first_name_email_address ON customers (last_name, first_name, email_address);
```

Don’t forget to confirm your changes. It also wouldn’t hurt to come up with some scenarios to test any index changes you make.

```
SELECT *
FROM pg_indexes
WHERE tablename IN ('customers', 'books', 'orders')
ORDER BY tablename, indexname;
```
