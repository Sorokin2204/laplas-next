import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const initStateUpdateFirm = {
  updateFirm: { data: null, loading: false, error: null },
};

export const updateFirm = createAsyncThunk('firm/updateFirm', async (data) => {
  console.log(data);
  return axios.patch(`api/firm`, data);
});

export const reducerUpdateFirm = {
  [updateFirm.pending]: (state) => {
    state.updateFirm.loading = true;
  },
  [updateFirm.fulfilled]: (state, action) => {
    state.updateFirm.loading = false;
    state.updateFirm.data = action.payload.data;
  },
  [updateFirm.rejected]: (state) => {
    state.updateFirm.loading = false;
  },
};
