import React from 'react';
import styles from './TextInput.module.scss';
const TextInput = ({ label, placeholder, name, noSpace }) => {
  return (
    <>
      <div class={`position-relative `}>
        {label && <label class={`form-label ${!noSpace && 'mt-3'}`}>{label}</label>}

        <input name={name} placeholder={placeholder} type="text" class="form-control" />
      </div>
    </>
  );
};

export default TextInput;
