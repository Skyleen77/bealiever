import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { compare } from 'bcrypt';

import GoogleProvider from 'next-auth/providers/google';
import { client } from '../../../../lib/client';

import type { JWT } from 'next-auth/jwt';
import type { NextAuthOptions } from 'next-auth';
import { SanityAdapter } from '@/lib/SanityAdapter';
import { generateUsername } from 'unique-username-generator';
import { getUserByEmailQuery } from '@/queries/user';

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
    Credentials({
      id: 'credentials',
      name: 'Credentials',
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
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Required');
        }

        const user = await client.fetch(getUserByEmailQuery, {
          email: credentials.email,
        });

        if (!user) {
          throw new Error('EmailNotExist&email=' + credentials.email);
        }

        if (!user.password) {
          throw new Error('NoPasswordSet&email=' + credentials.email);
        }

        const isCorrectPassword = await compare(
          credentials.password,
          user.password,
        );

        if (!isCorrectPassword) {
          throw new Error('IncorrectPassword&email=' + credentials.email);
        }

        return user;
      },
    }),
  ],
  pages: {
    signIn: '/auth/sign-in',
    signOut: '/auth/sign-out',
    error: '/auth/error',
  },
  debug: process.env.NODE_ENV === 'development',
  adapter: SanityAdapter(client, generateUsername),
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60,
  },
  jwt: {
    maxAge: 30 * 24 * 60 * 60,
  },
  callbacks: {
    async jwt({ token, user }: { token: JWT; user: any }) {
      if (user && user?.name) {
        token.name = user.name;
      }

      if ((user && user?.id) || user?._id) {
        token.id = user.id || user._id;
      }

      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
