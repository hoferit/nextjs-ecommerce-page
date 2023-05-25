CREATE DATABASE speedypals;
CREATE USER speedypals WITH ENCRYPTED PASSWORD 'speedypals';
GRANT ALL PRIVILEGES ON DATABASE speedypals TO speedypals;

\connect speedypals;
CREATE SCHEMA speedypals AUTHORIZATION speedypals;



CREATE TABLE products (
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name varchar(30) NOT NULL,
  type varchar(30) NOT NULL,
  price integer NOT NULL
);


SELECT has_table_privilege('speedypals', 'products', 'SELECT');


INSERT INTO products
  (name, type, price)
VALUES
  ( 'Millie', 'Alpaca', 30 ),
  ( 'Petey', 'Bunny', 50 ),
  ( 'Selma', 'Cow', 45 ),
  ( 'Poochie', 'Donkey', 60 ),
  ( 'Buttercup', 'Elephant', 48 ),
  ( 'Cookie', 'Fox', 54 ),
  ( 'Henry', 'Hippo', 48 ),
  ( 'Judy', 'Owl', 55 ),
  ( 'Wilbert', 'Raccoon', 200 );


CREATE ROLE speedypals WITH LOGIN PASSWORD 'speedypals';
GRANT ALL PRIVILEGES ON DATABASE speedypals TO speedypals;

ALTER ROLE speedypals WITH LOGIN PASSWORD 'speedypals';

psql -d speedypals -U speedypals
