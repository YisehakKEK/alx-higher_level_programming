-- Task: List all privileges of MySQL users `user_0d_1` and `user_0d_2` on localhost
-- This script displays the privileges for the specified users

-- Display privileges for `user_0d_1`
SHOW GRANTS FOR 'user_0d_1'@'localhost';

-- Display privileges for `user_0d_2`
SHOW GRANTS FOR 'user_0d_2'@'localhost';

