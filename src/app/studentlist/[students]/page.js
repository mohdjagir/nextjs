"use client"
import { useParams } from 'next/navigation'
import React from 'react'

const Students = ({params}) => {
    const {students} =params
    
    return (
        <div>
            <h1>Student Page</h1>
            <h3>Name: {students}</h3>
        </div>
    )
}

export default Students