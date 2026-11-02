-- docker run --name some-postgres -e POSTGRES_PASSWORD=12345 -d -p 5433:5432 postgres:18
SELECT current_database();

create database cyber;

SELECT current_database(), current_schema();

create table if not exists "user" (
	"id" SERIAL primary key,
	"email" VARCHAR(255),
	"fullName" VARCHAR(255),
	"avatar" VARCHAR(255),
	"password" VARCHAR(255),
	"googleId" VARCHAR(255),
	"totpSecret" TEXT,
	"createdAt" timestamp not null default CURRENT_TIMESTAMP,
	"updatedAt" timestamp not null default CURRENT_TIMESTAMP
)