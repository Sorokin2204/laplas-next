import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const initStateGetGroups = {
  getGroups: { offset: 4, page: 1, pages: 0, data: null, loading: false, error: null },
};

export const getGroups = createAsyncThunk('group/getGroups', async (data = {}, { getState }) => {
  const {
    group: {
      getGroups: { offset, page },
    },
  } = getState();
  return axios.get(`${process.env.SERVER_URL}/groups/`, { params: { offset, page, ...data } });
});

export const reducerGetGroups = {
  [getGroups.pending]: (state) => {
    state.getGroups.loading = true;
  },
  [getGroups.fulfilled]: (state, action) => {
    state.getGroups.loading = false;

    state.getGroups.data = action.payload.data.groups;
    state.getGroups.pages = action.payload.data.pages;
    state.getGroups.page = parseInt(action.payload.data.page);
  },
  [getGroups.rejected]: (state) => {
    state.getGroups.loading = false;
  },
};
