import React, { useState } from 'react';
const CardToggle = ({ title, img }) => {
  const [active, setActive] = useState(false);
  return (
    <div class="main-card mb-3 card">
      <div class="card-header font-size-sm text-capitalize fw-normal">
        <div class="avatar-icon-wrapper avatar-icon-sm">
          <div class="avatar-icon  rounded">
            <img src={img} alt="" />
          </div>
        </div>
        {title}
        <div class="btn-actions-pane-right actions-icon-btn">
          <div class={`toggle btn btn-primary ${active ? '' : 'off'}`} data-toggle="toggle" role="button" style={{ border: '#fff' }}>
            <input id="chkToggle1" type="checkbox" data-toggle="toggle" checked="" />
            <div class="toggle-group" onClick={() => setActive(!active)}>
              <label for="chkToggle1" class="btn btn-primary toggle-on">
                On
              </label>
              <label for="chkToggle1" class="btn btn-light toggle-off">
                Off
              </label>
              <span class="toggle-handle btn btn-light"></span>
            </div>
          </div>
          {/* <div class={`toggle btn btn-primary ${active ? '' : 'off'}`} data-toggle="toggle" role="button">
            <input id="chkToggle1" type="checkbox" data-toggle="toggle" checked="" />
            <div class="toggle-group" onClick={() => setActive(!active)}>
              <label for="chkToggle1" class="btn btn-primary toggle-on">
                On
              </label>
              <label for="chkToggle1" class="btn btn-light toggle-off">
                Off
              </label>
              <span class="toggle-handle btn btn-light"></span>
            </div>
          </div> */}
        </div>
      </div>
      <div class="card-body">
        <div class={`alert ${active ? 'alert-danger' : 'alert-success'} fade show`} role="alert" style={{ marginBottom: 0 }}>
          {active ? 'Ошибка' : 'Успешно'}
        </div>
      </div>
    </div>
  );
};

export default CardToggle;
