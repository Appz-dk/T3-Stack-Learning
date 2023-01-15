/*
  Warnings:

  - Added the required column `buildType` to the `BuildOrder` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BuildOrder" ADD COLUMN     "buildType" TEXT NOT NULL;
