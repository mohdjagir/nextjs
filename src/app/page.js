'use client'
import React from "react";

import Link from "next/link";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

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
      <Link href={'/login'}>Go to Login Page</Link>
      <br/>
      <Link href={'/about'}>Go to About Page</Link>
      <br/>
      <button onClick={()=>router.push("/login")}>Login Page</button>
      <br/><br/>
      <button onClick={submit}>About Page</button>
    </React.Fragment>
  )
}

