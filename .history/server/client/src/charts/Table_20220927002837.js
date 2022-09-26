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
            <input type={'text'} placeholder={"Search..."} />
            <ul>
                {userData.map((user) => {
                    <li>{</li>
                })}
            </ul>
            {/* <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Location</th>
                        <th>Product 1</th>
                        <th>Price</th>
                        <th>Product 2</th>
                        <th>Price</th>
                        <th>Product 3</th>
                        <th>Price</th>
                        <th>Total Price</th>
                        <th>Order Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userData.map((getData) => (
                            <tr key={getData.user_id}>
                                <td>{getData.user_id}</td>
                                <td>{getData.user_name}</td>
                                <td>{getData.user_email}</td>
                                <td>{getData.user_location}</td>
                                <td>{getData.product_1}</td>
                                <td>{getData.product_1_price}</td>
                                <td>{getData.product_2}</td>
                                <td>{getData.product_2_price}</td>
                                <td>{getData.product_3}</td>
                                <td>{getData.product_3_price}</td>
                                <td>{getData.totalprice}</td>
                                <td>{getData.order_date}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table> */}
        </>
    )
}

export default Table