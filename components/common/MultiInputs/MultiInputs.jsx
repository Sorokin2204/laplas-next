import React from 'react';
import DragGroupSpecs from '../../pages/category/DragGroupSpecs/DragGroupSpecs';
import styles from './MultiInputs.module.scss';
const MultiInputs = ({ fieldArray, form, textNotFound, isEditable, isDeletable }) => {
  return fieldArray.fields?.length !== 0 ? (
    fieldArray.fields?.map((catGroup, index) => !catGroup?.deleted && <DragGroupSpecs isEditable={isEditable} isDeletable={isDeletable} catGroup={catGroup} index={index} form={form} fieldArray={fieldArray} />)
  ) : (
    <div style={{ fontSize: '16px', margin: '0 auto', display: 'flex', justifyContent: 'center', padding: '32px 0' }}>{textNotFound}</div>
  );
};

export default MultiInputs;
