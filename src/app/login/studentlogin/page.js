import React from 'react'
import Link from 'next/link';
function StudentLogin() {
  return (
    <div>
    <h1>Student Login Page Details</h1>
    <Link href={"/login"}>go to logins</Link>
    </div>
  )
}

export default StudentLogin;