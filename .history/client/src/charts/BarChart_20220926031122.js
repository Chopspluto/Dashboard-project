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
    async function getData(){
        try {
            const response = await fetch("http://localhost:5000/data/users", {
                method: "GET",
                headers: { token: localStorage.token }
            });

            const parseResponse = await response.json();
            console.log(parseResponse);
            parseResponse.forEach(element => {
                arra.push
                setChartData(element.order_month)
            });
            console.log("data" + chartData)
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getData();
    },[])


    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: '# of Votes',
            data: "",
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
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