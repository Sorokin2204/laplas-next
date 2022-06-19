import React from 'react';
import styles from './MenuItem.module.scss';
const MenuItem = ({ link, children, title, currentPath, icon }) => {
  return (
    <>
      <li>
        <a href={link} class={currentPath === link && 'mm-active'}>
          {icon && <i class={icon}></i>}

          {title}
        </a>
        {children && children?.length !== 0 && (
          <ul>
            {children.map((child) => (
              <li>
                <a href={child.link}>{child.title}</a>
              </li>
            ))}
          </ul>
        )}
      </li>
    </>
  );
};

export default MenuItem;
