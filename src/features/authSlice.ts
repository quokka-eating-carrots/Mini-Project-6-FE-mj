import { createSlice } from '@reduxjs/toolkit';

export interface InitialState {
  email: string;
  name: string;
  token: string;
  isAuthenticated: boolean;
}
export interface autoCheck {
  auth: InitialState;
}

const initialState: InitialState = {
  email: '',
  name: '',
  token: '',
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state: InitialState, action) => {
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.token = action.payload.token;
      state.isAuthenticated = true;
    },
    logOutAction: (state) => {
      state.email = '';
      state.name = '';
      state.token = '';
      state.isAuthenticated = false;
    },
  },
});

export default authSlice.reducer;
export const { setUser, logOutAction } = authSlice.actions;
