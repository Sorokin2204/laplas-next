import { Provider } from 'react-redux';
import MainLayout from '../components/common/MainLayout/MainLayout';
import { store } from '../redux/store';
import { PrismaClient } from '@prisma/client';
import '../styles/style.scss';
import axios from 'axios';
import { appWithTranslation } from 'next-i18next';
import { SessionProvider } from "next-auth/react"
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps: { session, ...pageProps }, }) {
  axios.interceptors.request.use((config) => {
    console.log(config);
    return config;
  });
  const router = useRouter()

  if (router.pathname.startsWith("/admin")) 
	{
	  return (
	  
		<SessionProvider session={session}>
		<Provider store={store}>
		  <MainLayout>
			<Component {...pageProps} />
		  </MainLayout>
		</Provider>
		</SessionProvider>
	  );
  
	}
	 return (
				<SessionProvider session={session}>
			    <Provider store={store}>
				<Component {...pageProps} />
				</Provider>
				</SessionProvider>

			)
		
	
}
export default appWithTranslation(MyApp);
