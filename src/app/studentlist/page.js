"use client"
import React from 'react'
import Link from 'next/link'
const StudentList = () => {
  return (
    <div style={{textAlign:'center'}}>
        <h1>Student List</h1>
        <ul>
            <li><Link href={'/studentlist/product1'}>Product1</Link></li>
            <li><Link href={'/studentlist/product2'}>Product2</Link></li>
            <li><Link href={'/studentlist/product3'}>Product3</Link></li>
            <li><Link href={'/studentlist/product4'}>Product4</Link></li>
            <li><Link href={'/studentlist/product5'}>Product5</Link></li>
        </ul>
    </div>
  )
}

export default StudentList