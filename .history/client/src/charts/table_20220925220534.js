import React, { useEffect, useState } from 'react';

function Table() {

    const[userData, setUserData] = useState([]);

    const getUsers = () => {
            
    }
    useEffect(() => {
        getUsers();
    },[])
  return (
    <div>Table</div>
  )
}

export default Table