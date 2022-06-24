import React from 'react';
import styles from './Pagination.module.scss';
const Pagination = ({ pages, currentPage, onPageClick }) => {
  return (
    <div class="dataTables_paginate paging_simple_numbers" id="example_paginate">
      <ul class="pagination">
        <li class={`paginate_button page-item previous ${currentPage === 1 ? 'disabled' : ''}`} id="example_previous">
          <a
            onClick={() => {
              if (currentPage !== 1) {
                onPageClick(currentPage - 1);
              }
            }}
            aria-controls="example"
            data-dt-idx="0"
            tabindex="0"
            class="page-link">
            Назад
          </a>
        </li>
        {Array(pages)
          .fill()
          .map((val, i) => (
            <li class={`paginate_button page-item ${currentPage === i + 1 ? 'active' : ''}`}>
              <a
                onClick={() => {
                  if (currentPage !== i + 1) {
                    onPageClick(i + 1);
                  }
                }}
                aria-controls="example"
                data-dt-idx="1"
                tabindex="0"
                class="page-link">
                {i + 1}
              </a>
            </li>
          ))}
        <li class={`paginate_button page-item next ${pages == currentPage ? 'disabled' : ''}`} id="example_next">
          <a
            onClick={() => {
              if (pages !== currentPage) {
                onPageClick(currentPage + 1);
              }
            }}
            aria-controls="example"
            data-dt-idx="7"
            tabindex="0"
            class="page-link">
            Вперед
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
