'use client'
import React from "react";

import Link from "next/link";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import Image from "next/image";
export default function Home() {
  return (
    <div>
      <User />
    </div>
  );
}



const User = () => {
  const router= useRouter();
  const submit = () => {
    router.push('/about')
  }
  return (
    <React.Fragment>
      <h1>Home Page</h1>
      <Image src={"https://fastly.picsum.photos/id/452/200/300.jpg?hmac=GNRw9M4S7sR7m03kJ-vBNG4vr5gFJpy7T54vSqBA06E"} width={200} height={300} alt="random image"/>
      <Link href={"/productlist"}>Product List</Link>
      {/* <Link href={'/login'}>Go to Login Page</Link>
      <br/>
      <Link href={'/about'}>Go to About Page</Link>
      <br/>
      <Link href={'/studentlist'}>Student List Page</Link>
      <br/>
      <Link href={'/study'}>Study</Link>
      <br/>
      <button onClick={()=>router.push("/login")}>Login Page</button>
      <br/><br/>
      <button onClick={submit}>About Page</button> */}
    </React.Fragment>
  )
}

