import Link from 'next/link';
import React from 'react';
import styles from './MenuItem.module.scss';
const MenuItem = ({ link, children, title, currentPath, icon }) => {
  return (
    <>
      <li>
        <Link href={link}>
          <a class={currentPath === link && 'mm-active'}>
            {icon && <i class={icon}></i>}

            {title}
          </a>
        </Link>
        {children && children?.length !== 0 && (
          <ul>
            {children.map((child) => (
              <li>
                <Link href={child.link}>
                  <a class={currentPath === child.link && 'mm-active'}>{child.title}</a>
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
