-- SQLBook: Code
-- Kiểm tra version
SELECT
	VERSION ();

-- database
CREATE DATABASE IF NOT EXISTS cyber;

USE cyber;

-- table template
CREATE TABLE
	IF NOT EXISTS `TABLE_TEMPLATE` (
		`id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
		-- 
		-- 
		`deletedBy` INT,
		FOREIGN KEY (`deletedBy`) REFERENCES `Users` (`id`),
		`isDeleted` BOOLEAN NOT NULL DEFAULT 0,
		`deletedAt` TIMESTAMP NULL DEFAULT NULL,
		`createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
		`updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
	);

-- TIMESTAMP: mốc thời gian có múi giờ (UTC) quốc tế +0
-- DATETIME: là kiểu dữ liệu dùng để lưu ngày và giờ theo dạng tĩnh, không phụ thuộc múi giờ (timezone).

CREATE TABLE
    IF NOT EXISTS "users" (
        "id" SERIAL PRIMARY KEY,
        --
        "email" VARCHAR(255) NOT NULL UNIQUE,
        "fullName" VARCHAR(255),
        "avatar" VARCHAR(255),
        "password" VARCHAR(255),
        "googleId" VARCHAR(255),
        "totpSecret" TEXT,
        --
        "deletedAt" TIMESTAMP NULL DEFAULT NULL,
        "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
    );

CREATE TABLE
    IF NOT EXISTS "articles" (
        "id" SERIAL PRIMARY KEY,
        --
        "title" VARCHAR(255),
        "content" TEXT,
        "imageUrl" VARCHAR(500),
        "views" INT NOT NULL DEFAULT 0,
        "userId" INT NOT NULL,
        FOREIGN KEY ("userId") REFERENCES "users" ("id"),
        --
        "deletedAt" TIMESTAMP NULL DEFAULT NULL,
        "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
    );

INSERT INTO
    "articles" (
        "content",
        "imageUrl",
        "views",
        "userId",
        "createdAt",
        "updatedAt"
    )
VALUES
    (
        'Content about learning NextJS...',
        'https://picsum.photos/seed/1/600/400',
        15,
        1,
        '2024-01-01 08:00:00',
        '2024-01-01 08:00:00'
    ),
    (
        'Content about mastering React Query...',
        'https://picsum.photos/seed/2/600/400',
        32,
        1,
        '2024-01-02 09:00:00',
        '2024-01-02 09:00:00'
    ),
    (
        'Content about JavaScript tips...',
        'https://picsum.photos/seed/3/600/400',
        45,
        1,
        '2024-01-03 10:00:00',
        '2024-01-03 10:00:00'
    ),
    (
        'Comparison content...',
        'https://picsum.photos/seed/4/600/400',
        27,
        1,
        '2024-01-04 11:00:00',
        '2024-01-04 11:00:00'
    ),
    (
        'Content about TypeScript...',
        'https://picsum.photos/seed/5/600/400',
        12,
        1,
        '2024-01-05 12:00:00',
        '2024-01-05 12:00:00'
    ),
    (
        'Content about SQL joins...',
        'https://picsum.photos/seed/6/600/400',
        8,
        1,
        '2024-01-06 13:00:00',
        '2024-01-06 13:00:00'
    ),
    (
        'Extensions content...',
        'https://picsum.photos/seed/7/600/400',
        60,
        1,
        '2024-01-07 14:00:00',
        '2024-01-07 14:00:00'
    ),
    (
        'Content about React optimization...',
        'https://picsum.photos/seed/8/600/400',
        33,
        1,
        '2024-01-08 15:00:00',
        '2024-01-08 15:00:00'
    ),
    (
        'Content about API design...',
        'https://picsum.photos/seed/9/600/400',
        18,
        1,
        '2024-01-09 16:00:00',
        '2024-01-09 16:00:00'
    ),
    (
        'Predictions about web development...',
        'https://picsum.photos/seed/10/600/400',
        21,
        1,
        '2024-01-10 17:00:00',
        '2024-01-10 17:00:00'
    );

CREATE TABLE
    IF NOT EXISTS "foods" (
        "id" SERIAL PRIMARY KEY,
        --
        "name" VARCHAR(255),
        "description" VARCHAR(255) DEFAULT 'Chưa có thông tin',
        --
        "deletedAt" TIMESTAMP NULL DEFAULT NULL,
        "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
    );

CREATE TABLE
    IF NOT EXISTS "orders" (
        "id" SERIAL PRIMARY KEY,
        --
        "userId" INT,
        FOREIGN KEY ("userId") REFERENCES "users" ("id"),
        "foodId" INT,
        FOREIGN KEY ("foodId") REFERENCES "foods" ("id"),
        --
        "deletedAt" TIMESTAMP NULL DEFAULT NULL,
        "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
    );

CREATE TABLE
    IF NOT EXISTS "chat_groups" (
        "id" SERIAL PRIMARY KEY,
        --
        "name" VARCHAR(255),
        "ownerId" INT,
        FOREIGN KEY ("ownerId") REFERENCES "users" ("id"),
        --
        "deletedAt" TIMESTAMP NULL DEFAULT NULL,
        "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
    );

CREATE TABLE
    IF NOT EXISTS "chat_group_members" (
        "id" SERIAL PRIMARY KEY,
        --
        "userId" INT,
        "chatGroupId" INT,
        FOREIGN KEY ("userId") REFERENCES "users" ("id"),
        FOREIGN KEY ("chatGroupId") REFERENCES "chat_groups" ("id"),
        --
        "deletedAt" TIMESTAMP NULL DEFAULT NULL,
        "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
    );

CREATE TABLE
    IF NOT EXISTS "chat_messages" (
        "id" SERIAL PRIMARY KEY,
        --
        "chatGroupId" INT NOT NULL,
        "userIdSender" INT NOT NULL,
        "messageText" TEXT,
        FOREIGN KEY ("chatGroupId") REFERENCES "chat_groups" ("id"),
        FOREIGN KEY ("userIdSender") REFERENCES "users" ("id"),
        --
        "deletedAt" TIMESTAMP NULL DEFAULT NULL,
        "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
