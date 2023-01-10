import { createSlice } from "@reduxjs/toolkit";
import { addPost, fetchPosts } from "./postActions";

const initialState = {
    post: [],
    loading: false
}

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        setPost: (state, action) => {
            state.post.push(action.payload);
        }
    },
    extraReducers: {
        [fetchPosts.fulfilled]: (state, action) => {
            console.log("Fetched posts" + action.payload);
            state.post = action.payload;
        }
    }
})

export const selectPost = (state) => state.post.post;
export default postSlice.reducer;
export const {setPost} = postSlice.actions;