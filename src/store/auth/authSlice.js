import { createSlice } from '@reduxjs/toolkit';
import {
	registerUser
} from './authActions';

const initialState = {
	loading: false,
	user: null,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setCredentials: (state, action) => {
			state.user = action.payload.user;
			state.accessToken = action.payload.access_token;

			localStorage.setItem('userAccessToken', action.payload.access_token);
		}
	},
	extraReducers: {
		[registerUser.pending]: (state) => {
			state.loading = true;
		},
		[registerUser.fulfilled]: (state, action) => {
			state.loading = false;
			state.user = action.payload.message;
			state.error = null;
			state.success = true;
		},
		[registerUser.rejected]: (state, action) => {
			state.loading = false;
			state.error = action.payload.error;
		},
	},
});

export default authSlice.reducer;

export const { setCredentials } = authSlice.actions;
