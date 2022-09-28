import { PrismaAdapter } from '@next-auth/prisma-adapter';
import type { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

import prisma from '../../../utils/client';
import { getEnv } from '../../../utils/env';

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: getEnv('GITHUB_ID_DEV'),
      clientSecret: getEnv('GITHUB_SECRET_DEV'),
    }),
  ],
  pages: {
    signIn: '/auth/signin',
  },
  session: {
    strategy: 'jwt',
  },
};

export default NextAuth(authOptions);
