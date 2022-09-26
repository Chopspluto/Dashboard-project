import React, { useEffect, useState } from 'react';

function Table() {

    const[userData, setUserData] = useState([]);

    const getUsers = async() => {
        try {
            
        } catch (err) {
            console.error(err)
        }
    }
    useEffect(() => {
        getUsers();
    })
  return (
    <div>Table</div>
  )
}

export default Table