import { DefaultSession, DefaultUser } from 'next-auth';
import { JWT, DefaultJWT } from 'next-auth/jwt';
import type { UserRole } from '@prisma/client';

declare module 'next-auth' {
  interface Session {
    user: {
      id: number;
      email: string;
      role: UserRole;
      firstName?: string;
      lastName?: string;
    };
  }

  interface User extends DefaultUser {
    id: number;
    firstName?: string;
    lastName?: string;
    role: UserRole;
  }
}

declare module 'next-auth/jwt' {
  interface JWT extends DefaultJWT {
    id: number;
    role: UserRole;
  }
}
