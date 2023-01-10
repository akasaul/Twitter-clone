import { createAsyncThunk } from '@reduxjs/toolkit';
import { signInWithPopup, signOut } from "firebase/auth";
import { auth } from '../../firebase';
import { provider } from '../../firebase';

export const registerUser = createAsyncThunk(
    'user/register', 
    async () => {
        const res = await signInWithPopup(auth, provider);
        return res.user;
    }
);

export const logout = createAsyncThunk(
    "user/logout",
    async () => {
        const res = await signOut(auth);
        console.log("Logged out")
    }
)
