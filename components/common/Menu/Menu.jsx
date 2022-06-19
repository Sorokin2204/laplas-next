import React from 'react';
import { useBasePath } from '../../../hooks/useBasePatch';
import styles from './Menu.module.scss';
import { useRouter } from 'next/router';
import MenuItem from '../MenuItem/MenuItem';
const Menu = () => {
  const list = [
    {
      title: 'Товары',
      link: '/product/update',
      icon: 'metismenu-icon lnr-database',
    },
    {
      title: 'Интеграции',
      link: '/integratio ',
      icon: 'metismenu-icon pe-7s-share',
      children: [
        {
          title: 'Журнал',
          link: '/',
        },
        {
          title: 'Ozon Эвилент Маркет',
          link: '/product/update',
        },
        {
          title: 'Wildberries Эвилент Маркет',
          link: '/',
        },
        {
          title: 'Я.Маркет FBS Эвилент Маркет',
          link: '/',
        },
        {
          title: 'Ozon Эвилент',
          link: '/',
        },
        {
          title: 'Wildberries Эвилент',
          link: '/',
        },
      ],
    },
    {
      title: 'Фирмы',
      link: '/brands',
      icon: 'metismenu-icon pe-7s-global',
    },
  ];

  // const basePath = useBasePath();
  const router = useRouter();
  console.log(router);
  return (
    <div class="app-sidebar sidebar-shadow">
      <div class="app-header__logo">
        <div class="logo-src"></div>
        <div class="header__pane ms-auto">
          <div>
            <button type="button" class="hamburger close-sidebar-btn hamburger--elastic" data-class="closed-sidebar">
              <span class="hamburger-box">
                <span class="hamburger-inner"></span>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div class="app-header__mobile-menu">
        <div>
          <button type="button" class="hamburger hamburger--elastic mobile-toggle-nav">
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button>
        </div>
      </div>
      <div class="app-header__menu">
        <span>
          <button type="button" class="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
            <span class="btn-icon-wrapper">
              <i class="fa fa-ellipsis-v fa-w-6"></i>
            </span>
          </button>
        </span>
      </div>
      <div class="scrollbar-sidebar">
        <div class="app-sidebar__inner">
          <ul class="vertical-nav-menu">
            <li class="app-sidebar__heading">Menu</li>
            {list?.map((item) => (
              <MenuItem {...item} currentPath={router.pathname} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
