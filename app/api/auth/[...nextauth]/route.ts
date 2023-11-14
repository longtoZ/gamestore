import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials"
import { NextAuthOptions } from 'next-auth'
import clientPromise from "@/lib/mongodb"

async function getUser(username: string) {
    const client = await clientPromise;
    const db = client.db();
    const user= await db.collection('users').findOne({ username });

    return {
        props: {
            user,
        }
    }
}

export const authOptions:NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: {label:"username"},
        password: {label:"password"}
      },

      async authorize(credentials) {

        const {username, password} = credentials

        try {
            const user = await getUser(username)

            if (!user) {
                return null
            } else {
                const userPassword = user['props']['user']['password']
                if (password === userPassword) {
                    return user
                }
    
                return null
            }
        } catch (error) {
            console.log(error)
        }

        return null

      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/signin",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };