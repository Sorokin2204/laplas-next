import React from 'react';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
const MainLayout = ({ children }) => {
  return (
    <>
      <div class="app-container app-theme-white body-tabs-shadow fixed-header fixed-sidebar">
        <Header />

        <div class="app-main">
          <Menu />
          <div class="app-main__outer">
            <div class="app-main__inner">{children}</div>
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
    </>
  );
};

export default MainLayout;
