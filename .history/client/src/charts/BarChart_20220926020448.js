import React, { useEffect, useState } from 'react';
import { Chart as ChartJs, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJs.register(
    CategoryScale,
    LinearScale,
    BarElement)

function BarChart() {

    const [chartData, setChartData] = useState({});

    const chart = async () => {

        let month = [];

        try {
            const response = await fetch("http://localhost:5000/data/users/registerbymonth", {
                method: "GET",
                headers: { token: localStorage.token }
            });
            const parseResponse = await response.json();
            for(const data in parseResponse){
                month.push(parseInt(data.order_month))
            }
            console.log(month)
        } catch (error) {
            console.error(error)
        }
    };

    useEffect(() => {
        chart();
    }, []);

    return (
        <>
            <Bar data={chartData} height={280} />
        </>
    )
}

export default BarChart