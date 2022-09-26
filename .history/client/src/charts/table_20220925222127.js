import React, { useEffect, useState } from 'react';

function Table() {

    const [userData, setUserData] = useState([]);

    const getUsers = async () => {
        try {
            const response = await fetch("http://localhost:5000/data/users", {
                method: "GET",
                headers: 
            });
            const getData = await response.json();
            setUserData(getData);
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