import CredentialsProvider from 'next-auth/providers/credentials';
import { compare } from 'bcryptjs';
import { AuthOptions } from 'next-auth';
import { prisma } from '../../prisma/prisma-client';

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'text',
        },
        password: {
          label: 'Password',
          type: 'password',
        },
      },
      async authorize(credentials) {
        if (!credentials) {
          throw new Error('Недостаточно данных');
        }
        const values = {
          email: credentials.email,
        };
        const findUser = await prisma.user.findFirst({
          where: values,
        });
        if (!findUser) {
          throw new Error('Такая почта не зарегистрирована');
        }
        const isPasswordValid = await compare(credentials.password, findUser.password);
        if (!isPasswordValid) {
          throw new Error('Неверный пароль');
        }
        if (!findUser.verified) {
          throw new Error('Почта не подтверждена');
        }
        return {
          id: findUser.id,
          email: findUser.email,
          role: findUser.role,
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token }) {
      const findUser = await prisma.user.findFirst({
        where: {
          email: token.email as string | undefined,
        },
      });
      if (findUser) {
        token.id = findUser.id;
        token.email = findUser.email;
        token.firstName = findUser.firstName;
        token.lastName = findUser.lastName;
        token.role = findUser.role;
      }
      return token;
    },
    session({ session, token }) {
      if (session?.user) {
        session.user.id = token.id;
        session.user.role = token.role;
      }
      return session;
    },
  },
};
