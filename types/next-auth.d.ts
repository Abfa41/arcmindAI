import NextAuth, { DefaultSession } from "next-auth";
// Extend the default Session interface to include custom properties
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      accessToken?: string;
    } & DefaultSession["user"];
  }
}
