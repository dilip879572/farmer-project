import React, { useState } from "react";
function Events()
{
    const[data,setData]=useState(0)
    function demo(){
        setData(data+1)
    }
    return(
        <>
        <div>{data}</div>
        <button onClick={demo}>Click me</button>
        </>
    )
}
export default Events;