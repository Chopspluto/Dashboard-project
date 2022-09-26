import React, { useEffect, useState } from 'react';
import { Chart as ChartJs, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJs.register(
    CategoryScale,
    LinearScale,
    BarElement)

function BarChart() {

    const [data, setData] = useState([]);

    async function getdata() {
        try {
            const response = await fetch("http://localhost:5000/data/users/registerbymonth", {
                method: "GET",
                headers: {token: localStorage.token}
            });
            const parseResponse = await response.json();
            return parseResponse;

            // setDataSet(parseResponse)
            // console.log(parseResponse.order_month)

        } catch (err) {
            console.error(err.message)
        }
    }

    useEffect(() => {
        const fetchData = async() => {
            await fetch("http://localhost:5000/data/users/registerbymonth"), {
                method: "GET",
                headers: {token: localStorage.token}
            }
            .then((data) => {
                const response = data.json()
                return response
            }).then((response) => {

            })
        }
    })

    const data = 

    const options = {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: "Customer registrations by Month"
            },
        }
    }

    return (
        <>
            <Bar data={data} options={options} height={280} />
        </>
    )
}

export default BarChart