import React, { useEffect, useState } from 'react'

function Clock() {

    const[clockState, setClockState] = useState();

    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setState(date.toLocaleTimeString())
        }, 1000)
    })
  return (
    <>
    
    </>
  )
}

export default Clock