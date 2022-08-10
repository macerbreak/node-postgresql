
## Steps to reproduce from empty project
1) npm init -y
2) npm i express pg
3) npm i -D nodemon
4) create index.ts
5) ("start": "node index.ts") - add to the dependencies in package.json
6) ("dev": "nodemon index.ts") - add to the dependencies in package.json for auto refreshing server after changing
## Write in powershell
7) (psql -U postgres) - the command, write in opened powershell with path C:\Program Files\PostgreSQL\14\bin, to enter to your db
8) (create database "name of db";) - command to create new db after authorisation
9) (\l) - command allows you to check created databases
10) (\connect "name of db") - command allows you to connect to your db
11) (\dt) - command allows to check created tables in db
12) create your tables by using creating scripts
13) 