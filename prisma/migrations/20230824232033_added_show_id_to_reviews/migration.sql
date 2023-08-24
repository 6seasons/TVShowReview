/*
  Warnings:

  - A unique constraint covering the columns `[show_id]` on the table `Review` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `show_id` to the `Review` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Review" ADD COLUMN     "show_id" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Review_show_id_key" ON "Review"("show_id");

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_show_id_fkey" FOREIGN KEY ("show_id") REFERENCES "Show"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
