import React, { useEffect, useState } from 'react';

function Table() {

    const[userData, setUserData] = useState([]);

    const getUsers = async() => {
        const response = await
    }
    useEffect(() => {
        getUsers();
    })
  return (
    <div>Table</div>
  )
}

export default Table