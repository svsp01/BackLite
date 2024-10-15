import { createSlice } from '@reduxjs/toolkit';
import { loginUser, registerUser } from './userAPI'; // Ensure the path is correct
import { UserState } from './types'; // Ensure the path is correct

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        loading: false,
        error: null,
    } as UserState,
    reducers: {
        logout: (state) => {
            state.user = null;
        },
    },
    extraReducers: (builder) => {
        builder
            // Register user actions
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user; // Adjust based on your response structure
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string; 
            })

            // Login user actions
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user; // Adjust based on your response structure
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string; 
            });
    },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
