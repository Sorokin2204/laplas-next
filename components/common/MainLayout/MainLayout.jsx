import React, { useEffect } from 'react';
import ModalCategory from '../../pages/category/ModalCategory/ModalCategory';
import ModalFirma from '../../pages/firm/ModalFirma/ModalFirma';
import ModalRole from '../../pages/role/ModalRole/ModalRole';
import ModalUser from '../../pages/user/ModalUser/ModalUser';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import { useSelector } from 'react-redux';
import ModalGroup from '../../pages/group/ModalGroup/ModalGroup';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Loading from '../Loading/Loading';
import ModalSection from '../../pages/section/ModalSection/ModalSection';
const MainLayout = ({ children }) => {
  const { modalCategory, modalUser, modalFirm, modalRole, modalGroup, modalSection } = useSelector((state) => state.app);
  const router = useRouter();
  const { status } = useSession();
  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status]);
  return status === 'authenticated' ? (
    <>
      <div class="app-container app-theme-white body-tabs-shadow fixed-header fixed-sidebar">
        <Header />

        <div class="app-main">
          <Menu />
          <div class="app-main__outer">
            <div class="app-main__inner" style={{ position: 'relative' }}>
              {children}
            </div>
          </div>
        </div>
      </div>
      <div class="app-drawer-wrapper">
        <div class="drawer-nav-btn">
          <button type="button" class="hamburger hamburger--elastic is-active">
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button>
        </div>
      </div>
      <div class="app-drawer-overlay d-none animated fadeIn"></div>

      {modalCategory && <ModalCategory />}
      {modalUser && <ModalUser />}
      {modalFirm && <ModalFirma />}
      {modalRole && <ModalRole />}
      {modalGroup && <ModalGroup />}
      {modalSection && <ModalSection />}
    </>
  ) : (
    <Loading />
  );
};

export default MainLayout;
