import React, { useState } from 'react';
import { Chart as ChartJs, LineElement, PointElement, CategoryScale, LinearScale } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJs.register(
    CategoryScale,
    LinearScale,
    LineElement, PointElement)

function LineChart() {

    const [chartData, setChartData] = useState({
        jan: [], feb: [], mar: [], apr: [], may: [], jun: [], jul: [], aug: [], sept: [], oct: [], nov: [], dec: [],
    });
    const janArray = [], febArray = [], marArray = [], aprArray = [], mayArray = [], junArray = [],
        julyArray = [], augArray = [], septArray = [], octArray = [], novArray = [], decArray = [];

    async function getData() {
        try {
            const response = await fetch("http://localhost:5000/data/users/sales", {
                method: "GET",
                headers: {token: localStorage.token}
            }).then((res) => {
                const responseParse = res.json();
                return responseParse;
            }).then((res) => {
                res.forEach(element => {
                    
                });
            })


            const responseSales
        } catch (err) {
            console.error(err.message)
        }
    }
    var data = {
        labels: ['Floral Desktop Stationery Set', 'Unicorn Set', 'Fluorescent sticky notes', 'Metallic Cups & Straw Set', 'Purple Glitter Stationery Set'],
        datasets: [{
            label: '# of Votes',
            data: [10, 15, 13, 11, 16],
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

    var options = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }


    return (
        <>
            <Line data={data} options={options} height={300} />
        </>
    )
}

export default LineChart