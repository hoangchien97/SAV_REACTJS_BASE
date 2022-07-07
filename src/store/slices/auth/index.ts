import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "@store";

interface AuthState {
  accessToken: string | null;
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  accessToken: null,
  isLoggedIn: false,
};

const saveToken = (state: AuthState, { payload }: PayloadAction<string>) => {
  state.accessToken = payload;
  state.isLoggedIn = true;
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    saveToken,
  },
});

export const authActions = authSlice.actions;

export const authReducer = authSlice.reducer;

// Selectors
export const selectIsLoggedIn = (state: AppState) => state.auth.isLoggedIn;
