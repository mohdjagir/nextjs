"use client"
import { addBlog } from "@/redux/addBlogSlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function AddBlogData() {
    const [inputs, setInput] = useState('');
    const blogsData= useSelector((state)=>state.addBlogs.blogs)
    const dispatch = useDispatch();
    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const onSubmit = () => {
        dispatch(addBlog(inputs))
    }
    console.log(blogsData)
    return (
        <div style={{ display: 'flex', flexDirection: 'column', margin: '1rem' }}>
            <div>
                <h1>Add User</h1>
                <input type="text" name="content" style={{ margin: 5, maxWidth: 300 }} onChange={(e) => handleChange(e)} />
                <button style={{ maxWidth: 100 }} onClick={onSubmit}>Submit</button>
            </div>
            <div>
                <h2>Show User</h2>
                {blogsData?.length>0 && blogsData.map((item)=>(
                    <div>
                        <p>id: {item.id}</p>
                        <p>blog: {item.content}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}