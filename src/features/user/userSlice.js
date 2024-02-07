import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: JSON.parse(localStorage.getItem("user")) || null,
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
            localStorage.setItem("user", JSON.stringify(state.user));
        },
        logout: (state) => {
            state.user = null;
            localStorage.removeItem("user");
        },
    },
});

export const { login, logout } = userSlice.actions;
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
