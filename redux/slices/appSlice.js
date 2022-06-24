import { createSlice } from '@reduxjs/toolkit';

export const initialState = { modalUser: false };

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setShowModalUser: (state, { payload }) => {
      state.modalUser = payload;
    },
  },
});
export const { setShowModalUser } = appSlice.actions;
export const appReducer = appSlice.reducer;
