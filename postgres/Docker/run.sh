#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL

 CREATE TABLE IF NOT EXISTS sample(
      id SERIAL PRIMARY KEY,
      name varchar(255),
      age int NOT NULL
    );

  INSERT INTO sample (name, age) VALUES ('Lorem', 21);
  INSERT INTO sample (name, age) VALUES ('Ipsum', 22);

EOSQL