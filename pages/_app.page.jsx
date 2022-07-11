import { Provider } from 'react-redux';
import MainLayout from '../components/common/MainLayout/MainLayout';
import { store } from '../redux/store';
import { PrismaClient } from '@prisma/client';
import '../styles/style.scss';
import axios from 'axios';
import { appWithTranslation } from 'next-i18next';

function MyApp({ Component, pageProps }) {
  axios.interceptors.request.use((config) => {
    console.log(config);
    return config;
  });
  return (
    <Provider store={store}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </Provider>
  );
}
export default appWithTranslation(MyApp);
