"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const About = () => {
  const navigate= useRouter();

  const goBack=(routeName)=>{
    navigate.push(routeName)
  }

  return (
    <>
      <div>About</div>
      <button onClick={()=>goBack("/")}>go back</button><br/><br/>
      <Link href={"/about/aboutstudent"}>go to student page</Link><br/><br/>
      <Link href={"/about/aboutcollege"}>go to college page</Link><br/>
    </>
    
  )
}

export default About