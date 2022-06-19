import React from 'react';
// import styles from './CopyClipBoard.module.scss';
const CopyClipBoard = ({ title, link, disabled }) => {
  return (
    <div class="mt-3">
      <div class="form-label" style={{ textTransform: 'none' }}>
        {title}
      </div>
      <div class="input-group">
        <input type="text" class="form-control" id="clipboard-source-2" value={link} disabled={disabled} style={{ textDecoration: 'underline' }} />
        <div class="input-group-text">
          <button type="button" data-clipboard-target="#clipboard-source-2" class="btn btn-primary clipboard-trigger">
            <i class="lnr-file-empty"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CopyClipBoard;
