import React, { useEffect, useState } from 'react';

function Table({ tableData }) {

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
                <tbody>
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
                    {tableData.map(item => (

                        <tr key={item.user_id}>
                            <td>{item.user_id}</td>
                            <td>{item.user_name}</td>
                            <td>{item.user_email}</td>
                            <td>{item.user_location}</td>
                            <td>{item.product_1}</td>
                            <td>{item.product_1_price}</td>
                            <td>{item.product_2}</td>
                            <td>{item.product_2_price}</td>
                            <td>{item.product_3}</td>
                            <td>{item.product_3_price}</td>
                            <td>{item.totalprice}</td>
                            <td>{item.order_date}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </>
    )
}

export default Table