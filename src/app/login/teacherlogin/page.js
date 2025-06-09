import React from 'react'
import Link from 'next/link'
function TeacherLogin() {
  return (
    <div>
        <h1>Teacher Login</h1>
        <Link href={"/login"}>go to login</Link>
    </div>
  )
}

export default TeacherLogin