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


create table "orders" (
	"id" SERIAL primary key,
	
	"userId" int,
	"foodId" int,
	
-- 	FOREIGN KEY ("userId") REFERENCES "users"("id"),
-- 	FOREIGN KEY ("foodId") REFERENCES "foods"("id"),
	
	"createdAt" timestamp not null default CURRENT_TIMESTAMP,
	"updatedAt" timestamp not null default CURRENT_TIMESTAMP
)

INSERT INTO "orders" 	("userId", "foodId") VALUES
						(1, 2),
						(3, 1),
						(2, 5),
						(1, 3),
						(3, 2);

-- INNER JOIN
SELECT *
FROM "orders"
INNER JOIN "users" ON "orders"."userId" = "users"."id"
INNER JOIN "foods" ON "orders"."foodId" = "foods"."id"

-- LEFT JOIN & RIGHT JOIN
SELECT *
FROM "orders"
RIGHT JOIN "users" ON "orders"."userId" = "users"."id"


-- CROSS JOIN
SELECT *
FROM "orders"
CROSS JOIN "users"

-- Tìm 5 người đã like nhà hàng nhiều nhất
-- Tìm 5 người đã order thức ăn nhiều nhất

SELECT *
FROM "orders"
INNER JOIN "users" ON "orders"."userId" = "users"."id"
GROUP BY "userId"
-- ERROR:  column "orders.id" must appear in the GROUP BY clause or be used in an aggregate function

	
SELECT "userId", "id", "email", "fullName"
FROM "orders"
INNER JOIN "users" ON "orders"."userId" = "users"."id"
GROUP BY "userId"
-- ERROR:  column reference "id" is ambiguous

SELECT "userId", "users"."id", "email", "fullName"
FROM "orders"
INNER JOIN "users" ON "orders"."userId" = "users"."id"
GROUP BY "userId"
-- ERROR:  column "users.id" must appear in the GROUP BY clause or be used in an aggregate function


SELECT "userId", "users"."id", "email", "fullName", COUNT("userId") AS "Số lần mua"
FROM "orders"
INNER JOIN "users" ON "orders"."userId" = "users"."id"
GROUP BY "userId", "users"."id"
ORDER BY "Số lần mua" DESC
LIMIT 5


-- Tìm 2 nhà hàng có lượt like nhiều nhất.
-- Tìm 2 món có lượt mua nhiều nhất.

SELECT "foodId", "foods"."id", "name", "description", COUNT("foodId") AS "Số lần mua"
FROM "orders"
INNER JOIN "foods" ON "orders"."foodId" = "foods"."id"
GROUP BY "foodId", "foods"."id"
ORDER BY "Số lần mua" DESC
LIMIT 2

-- Tìm người dùng không hoạt động trong hệ thống(không đặt hàng, không like, không đánh giá nhà hàng).
-- Tìm người dùng không mua hàng trong hệ thống(không đặt hàng, không like, không đánh giá nhà hàng).

SELECT *
FROM "users"
LEFT JOIN "orders" ON "orders"."userId" = "users"."id"
WHERE "orders"."id" IS NULL










-- thứ tự chạy
-- FROM → WHERE → GROUP BY → HAVING → SELECT → DISTINCT → ORDER BY → DISTINTC ON → LIMIT
-- Từ đâu → lọc dòng → gom nhóm → lọc nhóm → chọn cột → bỏ trùng → sắp xếp → giới hạn

-- SELECT name, MAX(score)
-- FROM student_scores
-- WHERE score >= 5
-- GROUP BY name
-- HAVING MAX(score) >= 8
-- ORDER BY MAX(score) DESC
-- LIMIT 3;


	
	