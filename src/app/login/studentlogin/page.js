import React from 'react'
import Link from 'next/link';
function StudentLogin() {
  return (
    <div>
    <h1>Student Login Page</h1>
    <Link href={"/login"}>go to login</Link>
    </div>
  )
}

export default StudentLogin;