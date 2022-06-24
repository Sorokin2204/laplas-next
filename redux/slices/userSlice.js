import { createSlice } from '@reduxjs/toolkit';
import { initStateCreateUser, reducerCreateUser } from '../actions/user/createUser';
import { initStateDeleteUser, reducerDeleteUser } from '../actions/user/deleteUser';
import { initStateDeleteUsers, reducerDeleteUsers } from '../actions/user/deleteUsers';
import { initStateGetUsers, reducerGetUsers, reducerLocalGetUsers } from '../actions/user/getUsers';
import { initStateUpdateUser, reducerUpdateUser } from '../actions/user/updateUser';

export const initialState = {
  ...initStateGetUsers,
  ...initStateCreateUser,
  ...initStateUpdateUser,
  ...initStateDeleteUser,
  ...initStateDeleteUsers,
  editUser: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setEditUser: (state, action) => {
      state.editUser = action.payload;
    },

    setPage: (state, action) => {
      state.getUsers.page = action.payload;
    },
  },
  extraReducers: {
    ...reducerGetUsers,
    ...reducerCreateUser,
    ...reducerUpdateUser,
    ...reducerDeleteUser,
    ...reducerDeleteUsers,
  },
});
export const { setEditUser, setPage } = userSlice.actions;
export const userReducer = userSlice.reducer;
