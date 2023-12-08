import { AuthStateType, CurrentUserType } from "@/Types/UserTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: AuthStateType = {
  isAuthenticated: false,
  token: "",
  currentUser: {
    id: "",
    name: "",
    email: "",
  },
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsAuthenticated(state, action: PayloadAction<boolean>) {
      state.isAuthenticated = action.payload;
    },
    setCurrentUser(state, action: PayloadAction<CurrentUserType>) {
      state.currentUser = action.payload;
    },
  },
});

export const { setCurrentUser, setIsAuthenticated } = AuthSlice.actions;

export default AuthSlice.reducer;
