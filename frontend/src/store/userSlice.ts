import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  isLoggedIn: boolean;
  user: object | null;
  token: string | null;
}

const initialState: UserState = {
  isLoggedIn: false,
  user: null,
  token: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ user: object; token: string }>) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.token = null;
      localStorage.removeItem('user');
    },
    setUserFromLocalStorage: (state) => {
      const savedUser = localStorage.getItem('user');
      if (savedUser) {
        const parsedUser = JSON.parse(savedUser);
        state.isLoggedIn = true;
        state.user = parsedUser.user;
        state.token = parsedUser.token;
      }
    },
  },
});

export const { login, logout, setUserFromLocalStorage } = userSlice.actions;

export default userSlice.reducer;
