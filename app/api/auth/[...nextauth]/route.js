import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.G_CID || "",
            clientSecret: process.env.G_SKEY || ""
        })
    ],
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }