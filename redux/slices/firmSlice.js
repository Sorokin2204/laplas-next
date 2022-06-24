import { createSlice } from '@reduxjs/toolkit';

import { initStateGetFirms, reducerGetFirms } from '../actions/firm/getFirms';

export const initialState = {
  ...initStateGetFirms,
};

export const firmSlice = createSlice({
  name: 'firm',
  initialState,
  reducers: {},
  extraReducers: {
    ...reducerGetFirms,
  },
});

export const firmReducer = firmSlice.reducer;
