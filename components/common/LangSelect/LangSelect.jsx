import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import styles from './LangSelect.module.scss';
import { useRouter } from 'next/router';
const LangSelect = () => {
  const [listLang, setListLang] = useState([
    { label: 'Русский', value: 'ru' },
    { label: 'English', value: 'en' },
  ]);
  const [open, setOpen] = useState(false);
  const { locale, push, asPath, route } = useRouter();
  const onChangeLang = (loc) => {
    push(route, asPath, {
      locale: loc,
    });
  };
  return (
    <>
      {' '}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          userSelect: 'none',
        }}
        onClick={() => {
          setOpen(!open);
        }}>
        <div class="form-labelmb-0  me-1">
          <div style={{ padding: '8px 0' }}>{listLang.map((item) => item.value == locale && item.label)}</div>
          <OutsideClickHandler
            onOutsideClick={() => {
              setOpen(false);
            }}>
            <div tabindex="-1" role="menu" aria-hidden="true" class={`dropdown-menu ${open ? 'show' : ''}`} style={{ minWidth: '0px', padding: '6px 4px' }}>
              {listLang.map(
                (item) =>
                  item.value !== locale && (
                    <button type="button" tabindex="0" class="dropdown-item" style={{ maxWidth: '100px' }} onClick={() => onChangeLang(item.value)}>
                      {item.label}
                    </button>
                  ),
              )}
            </div>
          </OutsideClickHandler>
        </div>
        <i class="pe-7s-angle-down  opacity-8" style={{ fontSize: '24px' }}></i>
      </div>
    </>
  );
};

export default LangSelect;
