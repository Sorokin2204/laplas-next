import { configureStore } from '@reduxjs/toolkit';
import { appReducer } from './slices/appSlice';
import { firmReducer } from './slices/firmSlice';
import { roleReducer } from './slices/roleSlice';
import { userReducer } from './slices/userSlice';

export const store = configureStore({
  reducer: { user: userReducer, app: appReducer, role: roleReducer, firm: firmReducer },
});
