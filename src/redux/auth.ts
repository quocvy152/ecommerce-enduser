import { AuthPayload, AuthState } from '@/typings/authentication/auth';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: AuthState = {
    accessToken: null,
    refreshToken: null,
    hasAuthenticated: false,
    user: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signIn: (state, action: PayloadAction<AuthPayload>): AuthState => {
            return {
                ...state,
                accessToken: action.payload.accessToken,
                refreshToken: action.payload.refreshToken,
                user: action.payload.user,
                hasAuthenticated: true
            }
        },

        signOut: (state): AuthState => {
            return {
                ...state,
                accessToken: null,
                refreshToken: null,
                user: null,
                hasAuthenticated: false
            }
        },
    },
});

export const { signIn, signOut } = authSlice.actions;
export default authSlice.reducer;
