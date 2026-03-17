"use client"
import React from 'react'

const Lecture = ({params}) => {
  return (
    <div>
        <h1>Lecture Details</h1>
         {params.lectures.map((item,index)=>(
            <>
                <p>{item}</p>
            </>
         ))}
    </div>
  )
}

export default Lecture