import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const initStateGetFirms = {
  getFirms: { offset: 4, page: 1, pages: 0, data: null, loading: false, error: null },
};

export const getFirms = createAsyncThunk('user/getFirms', async (data = {}, { getState }) => {
  const {
    user: {
      getUsers: { offset, page },
    },
  } = getState();
  return axios.get(`api/firms/`, { params: { offset, page, ...data } });
});

export const reducerGetFirms = {
  [getFirms.pending]: (state) => {
    state.getFirms.loading = true;
  },
  [getFirms.fulfilled]: (state, { payload: { data } }) => {
    state.getFirms.loading = false;
    console.log(data.users);
    state.getFirms.data = data.users;
    state.getFirms.pages = data.pages;
    state.getFirms.page = parseInt(data.page);
  },
  [getFirms.rejected]: (state) => {
    state.getFirms.loading = false;
  },
};
