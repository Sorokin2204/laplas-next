import React, { useEffect, useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
const FirmSelect = () => {
  const [list, setList] = useState();
  const [selected, setSelected] = useState();
  const { data: session } = useSession();
  useEffect(() => {
    console.log(session);
    if (session?.user?.firms?.length !== 0) {
      let listFirms = [];
      session?.user?.firms.map((firm) => {
        listFirms.push({ label: firm[0]?.S_NAME, value: firm[0]?.U_ID });
      });
      setList(listFirms);
    }
  }, [session]);
  useEffect(() => {
    if (list?.length !== 0 && list) {
      setSelected(list[0]);
    }
  }, [list]);

  const [open, setOpen] = useState(false);
  const { locale, push, asPath, route } = useRouter();
  const onChangeLang = (val) => {
    setSelected(val);
  };
  return (
    <>
      {session?.user?.firms?.length !== 0 && (
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
            <div style={{ padding: '8px 0' }}>{selected?.label}</div>
            <OutsideClickHandler
              onOutsideClick={() => {
                setOpen(false);
              }}>
              {list?.lenght > 1 && (
                <div tabindex="-1" role="menu" aria-hidden="true" class={`dropdown-menu ${open ? 'show' : ''}`} style={{ minWidth: '0px', padding: '6px 4px' }}>
                  {list?.map(
                    (item) =>
                      item.value !== selected?.value && (
                        <button type="button" tabindex="0" class="dropdown-item" style={{ maxWidth: '100px' }} onClick={() => onChangeLang(item)}>
                          {item.label}
                        </button>
                      ),
                  )}
                </div>
              )}
            </OutsideClickHandler>
          </div>
          <i class="pe-7s-angle-down  opacity-8" style={{ fontSize: '24px' }}></i>
        </div>
      )}
    </>
  );
};

export default FirmSelect;
