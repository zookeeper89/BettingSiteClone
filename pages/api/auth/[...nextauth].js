import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect from "../../../utils/db";
import bcrypt from "bcrypt";
import UserModel from "../../../models/UserModel";
// import GoogleProvider from "next-auth/providers/google";
// import FacebookProvider from "next-auth/providers/facebook";
 
export default NextAuth({
  pages: {
    signIn: "/",
    signOut: "/",
    error: "/", // Error code passed in query string as ?error=
    // verifyRequest: "/auth/verify-request", // (used for check email message)
    // newUser: "/auth/new-user", // New users will be directed here on first sign in (leave the property out if not of interest)
  },
  session: {
    // Seconds - How long until an idle session expires and is no longer valid.
    maxAge: 60 * 24 * 60 * 60, // 60 days
  },
  providers: [
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    //   authorization: {
    //     params: {
    //       prompt: "consent",
    //       access_type: "offline",
    //       response_type: "code",
    //     },
    //   }, 
    // }),
    // FacebookProvider({
    //   clientId: process.env.FACEBOOK_CLIENT_ID,
    //   clientSecret: process.env.FACEBOOK_CLIENT_SECRET
    // }),
    CredentialsProvider({
      // Check if the user is allowed to login
      async authorize(credentials) {
        await dbConnect();

        /*
        Du kan putte hvilken som helst data herind, som bliver tilgængeligt i "credentials" parameteren.
        Så fx i front-end:
        Hav en side man bliver sendt til efter klik på link i email, hvor der er en query string med en unik kode.
        i en useEffect når router.isReady så kan du køre:
        signIn("credentials", { redirect: false, passwordLessLoginHash: "jge9gdogf3eg4" } 
        og så kan du her bare se om "passwordLessLoginHash" er tilstede på "credentials"
        og hvis det er så tjek databasen baseret på det og return relevant data derefter ligesom nedenunder.
        */

        // Check if a user with the email exists
        const user = await UserModel.findOne({ email: credentials.email });

        if (!user) throw new Error("Emailen-exists");

        // Check if the password is correct
        const passwordCheck = await bcrypt.compare(
          credentials.password,
          user.password
        );
        // await user.validatePassword(credentials.password);

        if (!passwordCheck) throw new Error("Password-fejl");

        return {
          id: user._id.toString(),
          email: user.email,
          name: user.name,
          role: user.role, // REMEMBER, you can't rely on this role parameter in the front-end for security. You can just use it to change navigation options for example, but always server side check if the user really is allowed to do a certain action
        };
        // Return data to the jwt callback
      }, 
    }),
  ],
  callbacks: {
    // Docs for callbacks: https://next-auth.js.org/configuration/options#callbacks
    async signIn({ user, account, profile, email, credentials }) {
      if (account.provider === 'google') {
        const newuser = await UserModel.findOne({ email: profile.email });
        if (newuser) {

          user.id = newuser.id;
          user.token = newuser.role;
          return user;
        } 
        else {
          const result = await new UserModel({email: profile.email, google_id: account.providerAccountId, name: profile.name,  role: "buyer"}).save();
          const newuser = await UserModel.findOne({ email: profile.email });
          user.id = newuser.id;
          user.token = newuser.role;
          return user;
        }
      } else if (account.provider === 'facebook') {
        //Facebook client login
        const newuser = await UserModel.findOne({ facebook_id: account.providerAccountId });
        if (newuser) {
          user.id = newuser.id;
          user.token = newuser.role;
          return user;
        } 
        else {
          const result = await new UserModel({email: profile.email, facebook_id: account.providerAccountId, name: profile.name,  role: "buyer"}).save();
          const newuser = await UserModel.findOne({ facebook_id: account.providerAccountId });
          user.id = newuser.id;
          user.token = newuser.role;
          return user;
        }
      }
      else {
        return user;
      }
    },

    // Add user id to token
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
        return token;
      }
      else {
        return token;
      }
    },

    // Add user id to session returned to front-end
    async session({ session, user, token }) {
      session.user.id = token.id;
      session.user.role = token.role;
      return session;
    },
  },

  // Jeg tror du kan bruge "events" til at holde øje med hvor ofte brugerne logger ind, hvis du vil lave statistik på det
  // https://next-auth.js.org/configuration/options#events
  // events: {}
});
