import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const initStateGetFirms = {
  getFirms: { data: null, loading: false, error: null },
};

export const getFirms = createAsyncThunk('user/getFirms', async () => {
  return axios.get(`api/firms/`);
});

export const reducerGetFirms = {
  [getFirms.pending]: (state) => {
    state.getFirms.loading = true;
  },
  [getFirms.fulfilled]: (state, { payload: { data } }) => {
    state.getFirms.loading = false;
    state.getFirms.data = data;
  },
  [getFirms.rejected]: (state) => {
    state.getFirms.loading = false;
  },
};
