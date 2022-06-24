import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const initStateGetRoles = {
  getRoles: { data: null, loading: false, error: null },
};

export const getRoles = createAsyncThunk('user/getRoles', async () => {
  return axios.get(`api/roles/`);
});

export const reducerGetRoles = {
  [getRoles.pending]: (state) => {
    state.getRoles.loading = true;
  },
  [getRoles.fulfilled]: (state, { payload: { data } }) => {
    state.getRoles.loading = false;
    state.getRoles.data = data;
  },
  [getRoles.rejected]: (state) => {
    state.getRoles.loading = false;
  },
};
