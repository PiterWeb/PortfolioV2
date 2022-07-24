-- CreateTable
CREATE TABLE "user" (
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "user_username_password_key" ON "user"("username", "password");
