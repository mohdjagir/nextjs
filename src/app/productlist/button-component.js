"use client"
export default function Button(props){
    console.log(props)
    return (
        <button onClick={()=>alert(props.price)}>Check Price</button>
    )
}