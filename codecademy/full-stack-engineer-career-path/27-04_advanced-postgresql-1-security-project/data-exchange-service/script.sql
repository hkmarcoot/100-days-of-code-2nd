/* Task 1 */
SELECT rolname 
FROM pg_roles
WHERE rolsuper = true;

/* Task 2 */
SELECT * 
FROM pg_roles;

/* Task 3 */
SELECT current_role;

/* Task 4 */
CREATE ROLE abc_open_data WITH NOSUPERUSER LOGIN;

/* Task 5 */
CREATE ROLE publishers WITH NOSUPERUSER LOGIN ROLE abc_open_data;

/* Task 6 */
GRANT USAGE ON SCHEMA analytics TO publishers;

/* Task 7 */
GRANT SELECT ON ALL TABLES IN SCHEMA analytics TO publishers;

/* Task 8 */
SELECT *
FROM information_schema.table_privileges 
WHERE grantee = 'publishers';

/* Task 9 */
SET ROLE abc_open_data;

SELECT * FROM analytics.downloads limit 10;

SET ROLE ccuser;

/* Task 10 */
SELECT * FROM directory.datasets LIMIT 5;

/* Task 11 */
GRANT USAGE ON SCHEMA directory TO publishers;

/* Task 12 */
GRANT SELECT (id, create_date, hosting_path, publisher, src_size) 
ON directory.datasets to publishers;

/* Task 13 */
SET ROLE abc_open_data;

-- SELECT id, publisher, hosting_path, data_checksum 
-- FROM directory.datasets;

SELECT id, publisher, hosting_path 
FROM directory.datasets;

SET ROLE ccuser;

/* Task 14 */
CREATE POLICY policy_name ON analytics.downloads 
FOR SELECT TO publishers USING (owner = current_user);

ALTER TABLE analytics.downloads ENABLE ROW LEVEL SECURITY;

/* Task 15 */
SELECT * FROM analytics.downloads LIMIT 5;

SET ROLE abc_open_data;

SELECT * FROM analytics.downloads LIMIT 10;


