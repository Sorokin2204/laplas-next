import clsx from 'clsx';
import { useRouter } from 'next/router';
import React from 'react';
import { localize } from '../../../public/locales/localize';
import Select from '../Select/Select';
import TextInput from '../TextInput/TextInput';
import styles from './DragItem.module.scss';
const DragItem = ({ list, form, key, onDelete }) => {
  const showTypeField = () => {};
  const { locale } = useRouter();
  return (
    <>
      <div className={clsx(styles.row)} key={key}>
        {/* {showTypeField({ ...props })} */}
        <div className={clsx(styles.drag)}></div>
        {list?.map((item) => (
          <div style={{ width: '100%' }}>{item?.type == 'text' ? <TextInput name={item?.name} noSpace white form={form} rules={{ required: true }} /> : item?.type == 'select' ? <Select defaultValue={item?.value} noSpace form={form} name={item?.name} options={item?.options} /> : ''}</div>
        ))}
        <button class="btn btn-primary" style={{ width: '98px' }}>
          {localize[locale].category.edit}
        </button>
        <button type="button" data-clipboard-target="#clipboard-source-2" class="btn btn-danger clipboard-trigger" style={{ width: '40px' }} onClick={() => onDelete()}>
          <i class="lnr-trash"></i>
        </button>
      </div>
    </>
  );
};

export default DragItem;
