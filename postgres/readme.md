# How to interact with postgres.

### When ever you build for first time start a script ./Docker/run.sh to initialize the database.
   * To run that script run command `docker ps` and copy the `CONTAINER ID` of db.
   * exec command `docker-compose exec -it "Container id" bin/bash`.
   * Move to that directory. and exec command `./run.sh`.

## interact with database.
  * go inside the container using exec command.
  * exec command `psql -U $POSTGRES_USER -d $POSTGRES_DB`.
  * Now, you are inside the psql shell.


## To take a backup of a database.
  * go inside the docker container.
  * exec command `pg_dump -U $POSTGRES_USER {database_name} > /var/lib/postgresql/data/dump.sql`.
  * you can find `dump.sql` at postgres/Data/dump.sql.

## To restore the database.
  * go inside the docker container.
  * put dump.sql file inside your postgres/Data folder.
  * exec command `psql -U $POSTGRES_USER sample < /var/lib/postgresql/data/dump.sql`