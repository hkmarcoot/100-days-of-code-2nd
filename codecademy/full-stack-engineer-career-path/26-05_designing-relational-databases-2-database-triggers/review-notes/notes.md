In this lesson on triggers in PostgreSQL we covered how:

Triggers are associated with a specific table, view or foreign table.
Triggers execute a specified function when certain operations are performed on the table (INSERT, UPDATE, DELETE, TRUNCATE).
Triggers can run before, after or instead of the operation attempts to alter the row.
A trigger set FOR EACH ROW is called once for every row modified.
FOR EACH STATEMENT executes once for the entire operation (0 modified rows would still trigger this).
Triggers can specify a boolean WHEN condition to see when they should be fired.
Multiple triggers of the same kind can exist on the same table. If so they are triggered in alphabetical order.
SELECT statements do not modify rows so no trigger can be set on a SELECT statement.
One SQL command can trigger more than one kind of trigger.
Use the DROP TRIGGER command to remove a trigger.
You can query the information_schema.triggers table to get a list of triggers in the system.
