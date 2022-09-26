import React, { useEffect, useState } from 'react';

function Table() {

    const [userData, setUserData] = useState([]);

    const getUsers = async () => {
        try {
            const response = await fetch("http://localhost:5000/data/users", {
                method: "GET",
                headers: { token: localStorage.token }
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
        <>
        <table>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Location</th>
                <th>Product 1</th>
                <th>Price</th>
                <th>Product 1</th>
                <th>Price</th>
                <th>Product 1</th>
                <th>Price</th>
            </tr>
        </table>
        </>
    )
}

export default Table