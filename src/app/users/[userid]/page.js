import React from "react";
import { getUserList } from "../../../../services/userApi";
export default async function UserDetails({ params }) {
    // const {userid}= props.params
    const { userid } = await params;
    const getUserData = getUserList();
    const actualData = await getUserData;

    const signleUserData = actualData[userid - 1]
    return (
        <div>
            <h1>User Details</h1>
            <p>Name: {signleUserData.name}</p>
            <p>username: {signleUserData.username}</p>
            <p>address: {signleUserData.address.city}</p>

        </div>
    )

}

export async function generateStaticParams() {
    const getUserData = getUserList();
    const actualData = await getUserData;
    return actualData.map((item)=>({
        userid:item.id.toString()
    }))
}