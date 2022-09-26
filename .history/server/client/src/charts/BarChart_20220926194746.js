import React, { useEffect, useState } from 'react';
import { Chart as ChartJs, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJs.register(
    CategoryScale,
    LinearScale,
    BarElement)

function BarChart() {

    const [chartData, setChartData] = useState([]);
    const arra = [];

    async function getData() {
        try {
            const response = await fetch("http://localhost:5000/data/users/registerbymonth", {
                method: "GET",
                headers: { token: localStorage.token }
            }).then((res) => {
                console.log(res.json().order_month)
            })

            // console.log("parseresponse " + response.order_month);

            
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getData();
    }, [])


    const data = {//purchases made
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Subscibers',
            data: [2, 9, 4, 8, 12, 5, 1, 4, 20, 0, 0, 0],
            backgroundColor: [
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    }
    const options = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }

    return (
        <>
            <Bar data={data} options={options} height={280} />
        </>
    )
}

export default BarChart