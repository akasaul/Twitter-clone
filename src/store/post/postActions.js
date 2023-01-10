import { createAsyncThunk } from "@reduxjs/toolkit";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import { serverTimestamp } from "firebase/firestore";


export const addPost = createAsyncThunk(
    "post/addPost",
    async ({name, photo, username, img, article}) => {
        try {
            const res = await addDoc(collection(db, "posts"), {
                user: {
                    name,
                    photo,
                    username,
                },
                img,
                article,
                timestamp: serverTimestamp()
            });

        }catch(err) {
            console.log(err)
        }
    }
)

export const fetchPosts = createAsyncThunk(
    "post/fetchPost",
    async() => {
        const unsubscribe = await onSnapshot(collection(db, "posts"),(snapshot) => {
            let posts = [];
            snapshot.forEach((doc) => posts.push({...doc.data(), id: doc.id}));
            console.log(posts);
            return posts;
        }) 
    }
)