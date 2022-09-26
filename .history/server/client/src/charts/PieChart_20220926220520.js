import React, { useState } from 'react';
import { Chart as ChartJs, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJs.register(
    Tooltip,
    Legend,
    ArcElement)

function PieChart() {

    const [chartData, setChartData] = useState({
        FDSS: [], US: [], FSN: [], MCSS: [], PGSS: []
    });
    const fdssArr = [], usArr = [], fsnArr = [], mcssArr = [], pgssArr = [];

    async function getData() {
        try {
            const response = await fetch("http://localhost:5000/data/users/products", {
                method: "GET",
                headers: { token: localStorage.token }
            }).then((res) => {
                const responseParse = res.json();
                return responseParse;
            }).then((res) => {
                res.forEach(element => {
                    // ------- Product-1 --------
                    if (element.product_1 === "Floral Desktop Stationery Set") {
                        fdssArr.push(element.product_1)
                    }
                    if (element.product_1 === "Unicorn Set") {
                        usArr.push(element.product_1)
                    }
                    if (element.product_1 === "Fluorescent sticky notes") {
                        fsnArr.push(element.product_1)
                    }
                    if (element.product_1 === "Metallic Cups & Straw Set") {
                        mcssArr.push(element.product_1)
                    }
                    if (element.product_1 === "Purple Glitter Stationery Set") {
                        pgssArr.push(element.product_1)
                    }
                    // ------- Product-2 --------
                    if (element.product_2 === "Floral Desktop Stationery Set") {
                        fdssArr.push(element.product_2)
                    }
                    if (element.product_2 === "Unicorn Set") {
                        usArr.push(element.product_2)
                    }
                    if (element.product_2 === "Fluorescent sticky notes") {
                        fsnArr.push(element.product_2)
                    }
                    if (element.product_2 === "Metallic Cups & Straw Set") {
                        mcssArr.push(element.product_2)
                    }
                    if (element.product_2 === "Purple Glitter Stationery Set") {
                        pgssArr.push(element.product_2)
                    }
                    // ------- Product-3 --------
                    if (element.product_3 === "Floral Desktop Stationery Set") {
                        fdssArr.push(element.product_3)
                    }
                    if (element.product_3 === "Unicorn Set") {
                        usArr.push(element.product_3)
                    }
                    if (element.product_3 === "Fluorescent sticky notes") {
                        fsnArr.push(element.product_3)
                    }
                    if (element.product_3 === "Metallic Cups & Straw Set") {
                        mcssArr.push(element.product_3)
                    }
                    if (element.product_3 === "Purple Glitter Stationery Set") {
                        pgssArr.push(element.product_3)
                    }
                });
            })

            setChartData({
                FDSS: fdssArr.length, 
                US: usArr.length, 
                FSN: fsnArr.length, 
                MCSS: mcssArr.length, 
                PGSS: pgssArr.length
            })


        } catch (err) {
            console.error(err)
        }
    }

    var data = {
        labels: ['Floral Desktop Stationery Set', 'Unicorn Set', 'Fluorescent sticky notes', 'Metallic Cups & Straw Set', 'Purple Glitter Stationery Set'],
        datasets: [{
            label: '# of Votes',
            data: [8, 11, 3, 5, 2, 3],
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
            <Pie data={data} options={options} />
        </>
    )
}

export default PieChart;