import axios from 'axios';
import NextAuth from 'next-auth';
import CredentialProvider from 'next-auth/providers/credentials';
export default NextAuth({
  providers: [
    CredentialProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        try {
          // const host = req.headers.host.split('.')[0];
          // console.log('HOSTTT', req.headers.host);
          const response = await axios.post(`${req.headers.origin}/api/auth`, { email: credentials.email, password: credentials.password });
          return response.data;
        } catch (error) {
          console.log(error);
          //   return null;
          if (error?.response?.status === 401) {
            throw new Error('Неверный пароль или email');
          } else {
            throw new Error('Произошла непредвиденая ошибка');
          }
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return { ...token, data: user };
      }

      return token;
    },

    async session({ session, token }, user) {
      session.user = token?.data;

      return session;
    },
  },

  secret: process.env.JWT_SECRET,
  pages: {
    signIn: '/login',
  },
});
