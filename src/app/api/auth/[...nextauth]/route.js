import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { authentication, createDirectus, login, rest } from "@directus/sdk";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'text', placeholder: 'Enter your email' },
                password: { label: 'Password', type: 'password', placeholder: 'Enter your password' },
            },
            async authorize(credentials) {               

                const client = createDirectus(process.env.NEXT_PUBLIC_DIRECTUS_PROJECT_URL).with(authentication()).with(rest());

                const res = await client.login(credentials.email, credentials.password);

                if (res === 'undefined') {
                    throw new Error('Wrong username or password');
                }

                if (res?.access_token) {
                    return res;
                }

                return null;
            }
        }),
    ],
    session: {
        jwt: true,
    },
    jwt: {
        secret: process.env.JWT_SECRET,
    },
    callbacks: {
        async jwt({ token, user, account }) {
            if (account && user) {
                return {
                    ...token,
                    accessToken: user.access_token,
                    refreshToken: user.refresh_token,
                };
            }

            return token;
        },

        async session({ session, token }) {
            session.user.accessToken = token.accessToken;
            session.user.refreshToken = token.refreshToken;
            return session;
        },
    },
    pages: {
        signIn: '/dashboard/login',
    }
})
export { handler as GET, handler as POST }

