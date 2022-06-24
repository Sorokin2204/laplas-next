import { createSlice } from '@reduxjs/toolkit';
import { initStateGetRoles, reducerGetRoles } from '../actions/role/getRoles';

export const initialState = {
  ...initStateGetRoles,
};

export const roleSlice = createSlice({
  name: 'role',
  initialState,
  reducers: {},
  extraReducers: {
    ...reducerGetRoles,
  },
});

export const roleReducer = roleSlice.reducer;
