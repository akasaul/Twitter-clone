import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import postReducer from "./post/postSlice";
import { getDefaultMiddleware } from '@reduxjs/toolkit';

const customizedMiddleware = getDefaultMiddleware({
	serializableCheck: false
  })
  

const store = configureStore({
	reducer: {
		auth: authReducer,
		post: postReducer
	}
});

export default store; 	
