import React from 'react';
// import styles from './Textarea.module.scss';
const Textarea = ({ label, rows, noSpace }) => {
  return (
    <>
      <div class="position-relative mt-3">
        <label for="exampleText" class="form-label">
          {label}
        </label>
        <textarea style={{ fontSize: '16px' }} rows={rows} name="text" class="form-control"></textarea>
      </div>
    </>
  );
};

export default Textarea;
