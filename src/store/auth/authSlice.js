import { createSlice } from '@reduxjs/toolkit';
import {
	logout,
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
		setUser: (state, action) => {
			state.user = action.payload;
		}
	},
	extraReducers: {
		// [registerUser.pending]: (state) => {
		// 	state.loading = true;
		// },
		// [registerUser.fulfilled]: (state, action) => {
		// 	state.loading = false;
		// 	state.user = action.payload.message;
		// 	state.error = null;
		// 	state.success = true;
		// },
		// [registerUser.rejected]: (state, action) => {
		// 	state.loading = false;
		// 	state.error = action.payload.error;
		// },
		[registerUser.pending]: (state) => {
			state.loading = true;
			console.log("Signing you up");
		},
		[registerUser.fulfilled]: (state, action) => {
			state.loading = false;
			state.user = action.payload;
		},
		[registerUser.rejected]: (state) => {
			state.loading = false;
			console.log("Failed to sign in")
		},
		[logout.fulfilled]: (state) => {
			state.user = null;
		}
	},
});

export const selectUser = (state) => state.auth.user;
export default authSlice.reducer;

export const { setUser } = authSlice.actions;
