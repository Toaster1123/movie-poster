import { hashSync } from 'bcrypt';
import { prisma } from './prisma-client';
import { Prisma } from '@prisma/client';

async function up() {
  await prisma.user.createMany({
    data: [
      {
        firstName: 'TEST_NAME',
        lastName: 'TEST_LAST_NAME',
        email: 'test@mail.com',
        password: hashSync('test', 10),
        verified: new Date(),
        role: 'USER',
      },
      {
        firstName: 'ADMIN',
        lastName: 'ADMIN_LAST_NAME',
        email: 'admin@mail.com',
        password: hashSync('password', 10),
        verified: new Date(),
        role: 'ADMIN',
      },
    ],
  });
}
async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
}
async function main() {
  try {
    await down();
    await up();
  } catch (error) {
    console.error(error);
  }
}
main()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
