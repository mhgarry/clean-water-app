/*
  Warnings:

  - You are about to drop the column `location` on the `WaterData` table. All the data in the column will be lost.
  - Added the required column `city` to the `WaterData` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `WaterData` table without a default value. This is not possible if the table is not empty.
  - Added the required column `zip` to the `WaterData` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "WaterData" DROP COLUMN "location",
ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "state" TEXT NOT NULL,
ADD COLUMN     "zip" TEXT NOT NULL;
