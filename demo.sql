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

alter table "user" rename to "users";

alter table "users"
	alter column "email" set not null,
	add constraint user_email_unique unique ("email");

create table "foods" (
	"id" SERIAL primary key,
	
	"name" VARCHAR(255),
	"description" TEXT,
	
	"createdAt" timestamp not null default CURRENT_TIMESTAMP,
	"updatedAt" timestamp not null default CURRENT_TIMESTAMP
)

INSERT into "foods" ("name", "description") VALUES
					('su kem','bánh được làm từ kem'),
					('gỏi gà','bánh được làm từ gà'),
					('gỏi vịt','bánh được làm từ vịt'),
					('su cá','bánh được làm từ cá'),
					('su heo','bánh được làm từ heo');

INSERT into "users" ("fullName", "email") VALUES
					('Nguyen Van A', 'a@gmail.com'),
					('Nguyen Van B', 'b@gmail.com'),
					('Nguyen Van C', 'c@gmail.com'),
					('Nguyen Van D', 'd@gmail.com'),
					('Nguyen Van E', 'e@gmail.com');


create table "order" (
	
)
	
	
	