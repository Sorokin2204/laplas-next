import { Provider } from 'react-redux';
import MainLayout from '../components/common/MainLayout/MainLayout';
import { store } from '../redux/store';
import { PrismaClient } from '@prisma/client';
import '../styles/style.scss';
import axios from 'axios';
import { appWithTranslation } from 'next-i18next';
import { SessionProvider } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  axios.interceptors.request.use((config) => {
    console.log(config);
    return config;
  });
  const router = useRouter();
  return (
    <Provider store={store}>
      {router.pathname.startsWith('/admin') || router.pathname.startsWith('/login') ? (
        router.pathname === '/login' ? (
          <SessionProvider session={session}>
            <Component {...pageProps} />
          </SessionProvider>
        ) : (
          <SessionProvider session={session}>
            <MainLayout>
              <Component {...pageProps} />
            </MainLayout>
          </SessionProvider>
        )
      ) : (
        <Component {...pageProps} />
      )}
    </Provider>
  );
}
export default appWithTranslation(MyApp);
