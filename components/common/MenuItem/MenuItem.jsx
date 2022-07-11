import Link from 'next/link';
import React from 'react';
import { localize } from '../../../public/locales/localize';
import styles from './MenuItem.module.scss';
import { useRouter } from 'next/router';
const MenuItem = ({ link, children, title, currentPath, icon }) => {
  const { locale } = useRouter();
  return (
    <>
      <li>
        <Link href={link}>
          <a class={currentPath === link && 'mm-active'}>
            {icon && <i class={icon}></i>}

            {localize[locale].menu[title]}
          </a>
        </Link>
        {children && children?.length !== 0 && (
          <ul>
            {children.map((child) => (
              <li>
                <Link href={child.link}>
                  <a class={currentPath === child.link && 'mm-active'}> {localize[locale].menu[child.title]}</a>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    </>
  );
};

export default MenuItem;
