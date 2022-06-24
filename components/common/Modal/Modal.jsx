import React from 'react';
import styles from './Modal.module.scss';
const Modal = ({ children, onClose, title, show }) => {
  return (
    <div
      class={`modal fade bd-example-modal-md ${show ? 'show' : ''}`}
      tabindex="-1"
      aria-labelledby="myLargeModalLabel"
      style={{ backgroundColor: 'rgba(0,0,0,0.4)', display: 'block', transition: 'all 0.3s ease-out', visibility: show ? 'visible' : 'hidden', opacity: show ? '1' : '0', display: 'block' }}
      aria-modal="true"
      role="dialog">
      <div class="modal-dialog modal-md" style={{ visibility: show ? 'visible' : 'hidden', opacity: show ? '1' : '0', display: 'block' }}>
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">
              {title}
            </h5>
            <button onClick={onClose} type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
