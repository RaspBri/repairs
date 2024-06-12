-- CreateTable
CREATE TABLE "Zipcode" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "zipcode" TEXT NOT NULL,
    "count" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Zipcode_zipcode_key" ON "Zipcode"("zipcode");
