import { configureStore } from "@reduxjs/toolkit";
import BlogReducer from "./addBlogSlice";
const store = configureStore({
    reducer: {
        addBlogs: BlogReducer,
    }
})

export default store;