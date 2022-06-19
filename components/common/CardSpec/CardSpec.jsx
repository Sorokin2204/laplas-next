import React from 'react';
import Select from '../Select/Select';
import TextInput from '../TextInput/TextInput';
import styles from './CardSpec.module.scss';
const CardSpec = ({ title, inputs }) => {
  return (
    <>
      <div class="main-card mb-3 card">
        <div class="card-header">{title}</div>
        <div class="card-body">
          {inputs?.map((input) => {
            switch (input.type) {
              case 'text':
                return <TextInput {...input} />;
              case 'select':
                return <Select {...input} />;
              case 'multi-select':
                return <TextInput {...input} />;

              default:
                break;
            }
          })}
        </div>
      </div>
    </>
  );
};

export default CardSpec;
