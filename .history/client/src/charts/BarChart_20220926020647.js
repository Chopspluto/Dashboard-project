import React, { useEffect, useState } from 'react';
import { Chart as ChartJs, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJs.register(
    CategoryScale,
    LinearScale,
    BarElement)

function BarChart() {

    const [chartData, setChartData] = useState({});

    const chart = () => {

        let month = [];
        // try {
            const response =  fetch("http://localhost:5000/data/users/registerbymonth", {
                method: "GET",
                headers: { token: localStorage.token }
            });
            const parseResponse =  response.json();
            for(const data in parseResponse){
                month.push(parseInt(data.order_month))
            }
            setChartData({
                labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                datasets: [{
                    label: '',
                    data: month,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)'
                    ],
                    borderWidth: 1
                }]
            });
        // } catch (error) {
            // console.error(error)
        // }
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