import React, { useEffect, useState } from 'react';
import { get } from '../../../server/routes/chartAPIs';

function Table() {

    const[userData, setUserData] = useState([]);

    const getUsers = async() => {
        const response = await fetch("http://localhost:5000/data/users");
        const getData = await response.json();

        console.log(get)
    }
    useEffect(() => {
        getUsers();
    })
  return (
    <div>Table</div>
  )
}

export default Table