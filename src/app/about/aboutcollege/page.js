import React from 'react'
import Link from 'next/link'
function AboutCollege() {
  return (
    <div><h1>About College</h1><br/>
    <Link href={"/about"}>go to about page</Link>
    </div>
  )
}

export default AboutCollege