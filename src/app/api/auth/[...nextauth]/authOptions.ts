import prisma from '@/lib/prisma';
import { type AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import * as bcrypt from 'bcrypt';
import { type User } from '@prisma/client';

export const authOptions: AuthOptions = {
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET!,
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.user = user as User;
      return token;
    },

    async session({ token, session }) {
      session.user = token.user;
      return session;
    },
  },
  pages: {
    signIn: '/login',
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: {
          label: 'User Name',
          type: 'text',
          placehoder: 'Your User Name',
        },
        password: {
          label: 'Password',
          type: 'password',
        },
      },
      async authorize(credentials) {
        const user = await prisma.user.findUnique({
          where: {
            email: credentials?.username,
          },
        });

        if (!user)
          throw new Error('Nazwa użytkownika lub hasło jest niepoprawne');

        if (!credentials?.password) throw new Error('Błąd! Podaj hasło.');

        const isPasswordCorrect = await bcrypt.compare(
          credentials.password,
          user.password,
        );

        if (!isPasswordCorrect)
          throw new Error('Nazwa użytkownika lub hasło nie są poprawne');

        if (!user.emailVerified)
          throw new Error('Przed zalogowanie potwierdź swoją rejestrację');

        const { password, ...userWithoutPassword } = user;

        return userWithoutPassword;
      },
    }),
  ],
};
