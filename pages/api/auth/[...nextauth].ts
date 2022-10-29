import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/discord';

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.DISCORD_ID!,
      clientSecret: process.env.DISCORD_SECRET!,
    }),
    // ...add more providers here
  ],
};

export default NextAuth(authOptions);
