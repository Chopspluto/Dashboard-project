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
                <th>Customer Name</th>
                <th></th>
                <th>ID</th>
                <th>ID</th>
            </tr>
        </table>
        </>
    )
}

export default Table