import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const initStateDeleteUsers = {
  deleteUsers: { data: null, loading: false, error: null },
};

export const deleteUsers = createAsyncThunk('user/deleteUsers', async (data) => {
  return axios.post(`${process.env.SERVER_URL}/users`, data);
});

export const reducerDeleteUsers = {
  [deleteUsers.pending]: (state) => {
    state.deleteUsers.loading = true;
  },
  [deleteUsers.fulfilled]: (state, action) => {
    state.deleteUsers.loading = false;
    state.deleteUsers.data = action.payload.data;
  },
  [deleteUsers.rejected]: (state) => {
    state.deleteUsers.loading = false;
  },
};
