import { hashSync } from 'bcryptjs';
import { prisma } from './prisma-client';
import { ProfessionVariants } from '@prisma/client';
import {
  countries,
  genres,
  hallSeanses,
  movies,
  persons,
  hallExceptions,
  occupiedHalls,
} from './constants';

const generateSeanse = () => {
  return hallSeanses
    .map((seanse, id) =>
      seanse.map((seanseData) => ({
        ...seanseData,
        hallSchemaId: id + 1,
      })),
    )
    .flat();
};

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

  await prisma.person.createMany({
    data: persons.map((person) => ({
      ...person,
      profession: person.profession as ProfessionVariants,
    })),
  });

  await prisma.genre.createMany({
    data: genres,
  });

  await prisma.country.createMany({
    data: countries,
  });

  await Promise.all(
    movies.map((movie, id) =>
      prisma.movie.create({
        data: {
          id: id + 1,
          name: movie.name,
          premierDate: movie.premierDate,
          description: movie.description,
          movieLength: movie.movieLength,
          ageRating: movie.ageRating,
          imageUrl: movie.imageUrl,
          persons: {
            connect: movie.persons.map((id) => ({ id })),
          },
          genres: {
            connect: movie.genres.map((id) => ({ id })),
          },
          countries: {
            connect: movie.countries.map((id) => ({ id })),
          },
        },
      }),
    ),
  );

  await prisma.hallSchema.createMany({
    data: [
      {
        rows: 9,
        cols: 15,
      },
      {
        rows: 9,
        cols: 15,
      },
      {
        rows: 9,
        cols: 15,
      },
      {
        rows: 9,
        cols: 15,
      },
      {
        rows: 7,
        cols: 12,
      },
    ],
  });

  await prisma.hallExceptions.createMany({
    data: hallExceptions,
  });
  await prisma.hallOccupied.createMany({
    data: occupiedHalls,
  });
  await prisma.hallSeanses.createMany({
    data: generateSeanse(),
  });
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Movie" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Person" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Genre" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Country" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "HallExceptions" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "HallOccupied" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "HallSeanses" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "HallSchema" RESTART IDENTITY CASCADE`;
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
