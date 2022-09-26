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
                            <td>{d.user_id}</td>
                            <td>{d.user_name}</td>
                            <td>{d.user_email}</td>
                            <td>{d.user_location}</td>
                            <td>{d.product_1}</td>
                            <td>{d.product_1_price}</td>
                            <td>{d.product_2}</td>
                            <td>{d.product_2_price}</td>
                            <td>{d.product_3}</td>
                            <td>{d.product_3_price}</td>
                            <td>{d.totalprice}</td>
                            <td>{getData.order_date}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </>
    )
}

export default Table