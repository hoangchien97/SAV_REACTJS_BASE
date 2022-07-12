import { ProfileResponse } from "@interfaces/auth";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "@store";

interface AuthState {
  accessToken: string | null;
  isLoggedIn: boolean;
  user: any;
}

const initialState: AuthState = {
  accessToken: null,
  isLoggedIn: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state: AuthState, { payload }: PayloadAction<string>) => {
      state.accessToken = payload;
      state.isLoggedIn = true;
    },
    saveProfile: (
      state: AuthState,
      { payload }: PayloadAction<ProfileResponse>
    ) => {
      state.user = payload;
    },
    logout(state: AuthState) {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export const authActions = authSlice.actions;

export const { login, logout, saveProfile } = authSlice.actions;

export const authReducer = authSlice.reducer;

// Selectors
export const selectIsLoggedIn = (state: AppState) => state.auth.isLoggedIn;
