import React, { useEffect, useState } from 'react'

function Clock() {

    const[state, setState] = useState();

    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setState()
        }, 1000)
    })
  return (
    <>
    
    </>
  )
}

export default Clock