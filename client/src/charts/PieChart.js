import React, { useEffect, useState } from 'react';
import { Chart as ChartJs, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJs.register(
    Tooltip,
    Legend,
    ArcElement)

function PieChart() {

    const [chartData, setChartData] = useState({
        PGB: [], CGB: [], RGGB: [], OPM: [], MT: [], CPIB: []
    });
    const PGB = [], CGB = [], RGGB = [], OPM = [], MT = [], CPIB = [];

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
                    if (element.product_1 === "Purple Gift Box") {
                        PGB.push(element.product_1)
                    }
                    if (element.product_1 === "Custom Gift Box") {
                        CGB.push(element.product_1)
                    }
                    if (element.product_1 === "Rose Gold Gift Box") {
                        RGGB.push(element.product_1)
                    }
                    if (element.product_1 === "Ocean Print Mug") {
                        OPM.push(element.product_1)
                    }
                    if (element.product_1 === "Matte Tumbler") {
                        MT.push(element.product_1)
                    }
                    if (element.product_1 === "Custom Print Insulated Bottles") {
                        CPIB.push(element.product_1)
                    }
                    // ------- Product-2 --------
                    if (element.product_2 === "Purple Gift Box") {
                        PGB.push(element.product_2)
                    }
                    if (element.product_2 === "Custom Gift Box") {
                        CGB.push(element.product_2)
                    }
                    if (element.product_2 === "Rose Gold Gift Box") {
                        RGGB.push(element.product_2)
                    }
                    if (element.product_2 === "Ocean Print Mug") {
                        OPM.push(element.product_2)
                    }
                    if (element.product_2 === "Matte Tumbler") {
                        MT.push(element.product_2)
                    }
                    if (element.product_1 === "Custom Print Insulated Bottles") {
                        CPIB.push(element.product_2)
                    }
                    // ------- Product-3 --------
                    if (element.product_3 === "Purple Gift Box") {
                        PGB.push(element.product_3)
                    }
                    if (element.product_3 === "Custom Gift Box") {
                        CGB.push(element.product_3)
                    }
                    if (element.product_3 === "Rose Gold Gift Box") {
                        RGGB.push(element.product_3)
                    }
                    if (element.product_3 === "Ocean Print Mug") {
                        OPM.push(element.product_3)
                    }
                    if (element.product_3 === "Matte Tumbler") {
                        MT.push(element.product_3)
                    }
                    if (element.product_1 === "Custom Print Insulated Bottles") {
                        CPIB.push(element.product_3)
                    }
                });
            })

            setChartData({
                PGB: PGB.length, CGB: CGB.length, RGGB: RGGB.length, OPM: OPM.length, MT: MT.length, CPIB: CPIB.length
            })

        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        getData();
    })

    var data = {
        labels: ['Purple Gift Box', 'Custom Gift Box', 'Rose Gold Gift Box', 'Ocean Print Mug', 'Matte Tumbler', 'Custom Print Insulated Bottles'],
        datasets: [{
            label: '# of Votes',
            data: [chartData.PGB, chartData.CGB, chartData.RGGB, chartData.OPM, chartData.MT, chartData.CPIB],
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
            <h6 className='uppercase text-xs text-center font-medium pb-4'>Total Number of Products Sold by Category</h6>
            <Pie data={data} options={options} />
        </>
    )
}

export default PieChart;