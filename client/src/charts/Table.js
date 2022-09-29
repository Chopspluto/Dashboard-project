import React from 'react';

function Table({ tableData, filterToggle }) {

    return (
        <>
            <h4 className='uppercase text-center font-medium'>Order Information</h4>
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
                            <td><p>${item.product_1_price}</p></td>
                            <td>{item.product_2}</td>
                            <td><p>${item.product_2_price}</p></td>
                            <td>{item.product_3}</td>
                            <td><p>${item.product_3_price}</p></td>
                            <td><p>${item.totalprice}</p></td>
                            <td>{item.order_date}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </>
    )
}

export default Table