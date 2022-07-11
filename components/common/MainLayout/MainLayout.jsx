import React from 'react';
import ModalCategory from '../../pages/category/ModalCategory/ModalCategory';
import ModalFirma from '../../pages/firm/ModalFirma/ModalFirma';
import ModalRole from '../../pages/role/ModalRole/ModalRole';
import ModalUser from '../../pages/user/ModalUser/ModalUser';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import { useSelector } from 'react-redux';
import ModalGroup from '../../pages/group/ModalGroup/ModalGroup';
const MainLayout = ({ children }) => {
  const { modalCategory, modalUser, modalFirm, modalRole, modalGroup } = useSelector((state) => state.app);
  return (
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
    </>
  );
};

export default MainLayout;
