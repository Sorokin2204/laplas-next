import { createSlice } from '@reduxjs/toolkit';

export const initialState = { modalUser: false, modalFirm: false, modalRole: false, modalCategory: false, modalCreateCategory: false, modalGroup: false };

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setShowModalUser: (state, { payload }) => {
      state.modalUser = payload;
    },
    setShowModalGroup: (state, { payload }) => {
      state.modalGroup = payload;
    },
    setShowModalCategory: (state, { payload }) => {
      state.modalCategory = payload;
    },
    setShowCreateModalCategory: (state, { payload }) => {
      state.modalCreateCategory = payload;
    },
    setShowModalFirm: (state, { payload }) => {
      state.modalFirm = payload;
    },
    setShowModalRole: (state, { payload }) => {
      state.modalRole = payload;
    },
  },
});
export const { setShowModalUser, setShowModalFirm, setShowModalRole, setShowModalCategory, setShowCreateModalCategory, setShowModalGroup } = appSlice.actions;
export const appReducer = appSlice.reducer;
