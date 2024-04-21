/*
  Warnings:

  - The primary key for the `Object` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `Object` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Object" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "strTest" TEXT NOT NULL,
    "angle_X" TEXT NOT NULL,
    "angle_y" TEXT NOT NULL
);
INSERT INTO "new_Object" ("angle_X", "angle_y", "id", "strTest") SELECT "angle_X", "angle_y", "id", "strTest" FROM "Object";
DROP TABLE "Object";
ALTER TABLE "new_Object" RENAME TO "Object";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
