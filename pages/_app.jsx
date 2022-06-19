import MainLayout from '../components/common/MainLayout/MainLayout';

import '../styles/style.scss';

export default function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
