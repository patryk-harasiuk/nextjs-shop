import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';
import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

import { getEnv } from '../../../utils/env';

const prisma = new PrismaClient();

export default NextAuth({
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
  adapter: PrismaAdapter(prisma),
});
