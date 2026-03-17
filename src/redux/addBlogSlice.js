import { nanoid, createSlice } from "@reduxjs/toolkit";
const initialState = {
    blogs: []
}

const BlogReducer = createSlice({
    name: 'addBlog',
    initialState,
    reducers: {
        addBlog: (state, action) => {
            console.log("action",action)
            const data = {
                id: nanoid(),
                content: action.payload
            }
            state.blogs.push(data);
        }

    }
})

export const { addBlog } = BlogReducer.actions;
export default BlogReducer.reducer