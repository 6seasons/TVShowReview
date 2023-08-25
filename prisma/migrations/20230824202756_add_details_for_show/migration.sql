/*
  Warnings:

  - Added the required column `details` to the `Show` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Show" ADD COLUMN     "details" TEXT NOT NULL;
