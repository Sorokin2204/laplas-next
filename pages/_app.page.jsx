import { Provider } from 'react-redux';
import MainLayout from '../components/common/MainLayout/MainLayout';
import { store } from '../redux/store';
import { PrismaClient } from '@prisma/client';
import '../styles/style.scss';
export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </Provider>
  );
}
