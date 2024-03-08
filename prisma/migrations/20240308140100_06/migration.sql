/*
  Warnings:

  - Added the required column `userId` to the `Producto` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Producto` ADD COLUMN `userId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Producto` ADD CONSTRAINT `Producto_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
