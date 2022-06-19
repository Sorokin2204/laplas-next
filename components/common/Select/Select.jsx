import React from 'react';
import styles from './Select.module.scss';
import ReactSelect from 'react-select';
import CreatableSelect from 'react-select/creatable';
const Select = ({ placeholder, options, defaultValue, label, creatable, isMulti, noSpace }) => {
  return (
    <>
      {label && <label class={`form-label ${!noSpace && 'mt-3'}`}>{label}</label>}

      {creatable ? (
        <CreatableSelect noOptionsMessage={({ inputValue: string }) => 'Нет опций'} defaultValue={defaultValue} placeholder={placeholder ?? ''} isMulti options={options} />
      ) : (
        <ReactSelect noOptionsMessage={({ inputValue: string }) => 'Нет опций'} defaultValue={defaultValue} isMulti={isMulti} options={options} placeholder={placeholder ?? ''} />
      )}
    </>
  );
};

export default Select;
