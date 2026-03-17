import React from "react";
import { getUserList } from "../../../services/userApi";
import Link from "next/link";
export default async function Users() {
    const userData = await getUserList();
    console.log("userdata", userData)
    console.log(process.env.SERVER_PASSWORD)
    return (
        <div>
            <h1>User List</h1>
            {userData.map((itme,index)=>(
                <p style={{margin:5}} key={index}>
                    <Link href={`/users/${itme.id}`}>{itme.name}</Link>
                </p>
                
            ))}
        </div>
    )
}