import { createSlice } from '@reduxjs/toolkit';

export const initialState = { modalUser: false, modalFirm: false, modalRole: false };

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setShowModalUser: (state, { payload }) => {
      state.modalUser = payload;
    },
    setShowModalFirm: (state, { payload }) => {
      state.modalFirm = payload;
    },
    setShowModalRole: (state, { payload }) => {
      state.modalRole = payload;
    },
  },
});
export const { setShowModalUser, setShowModalFirm, setShowModalRole } = appSlice.actions;
export const appReducer = appSlice.reducer;
