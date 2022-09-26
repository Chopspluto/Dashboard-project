import React, { useEffect, useState } from 'react';
import { Chart as ChartJs, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJs.register(
    CategoryScale,
    LinearScale,
    BarElement)

function BarChart() {

    const [chartData, setChartData] = useState({
        jan: [], feb: [], mar: [], apr: [], may: [], jun: [], jul: [], aug: [], sept: [], oct: [], nov: [], dec: [],
    });
    const janArray = [], febArray = [], marArray = [], aprArray = [], mayArray = [], junArray = [],
        julyArray = [], augArray = [], septArray = [], octArray = [], novArray = [], decArray = [];

    async function getData() {
        try {
            const response = await fetch("http://localhost:5000/data/users/registerbymonth", {
                method: "GET",
                headers: { token: localStorage.token }
            }).then((res) => {
                const responseParse = res.json();
                return responseParse
            }).then((res) => {
                console.log(res);
                res.forEach(element => {
                    console.log(element)
                    if (element.order_month === "January") {
                        janArray.push(element.order_month)
                        // console.log(`element ${element.order_month}`)
                    }
                    if (element.order_month === "February") {
                        febArray.push(element.order_month)
                    }
                    if (element.order_month === "March") {
                        marArray.push(element.order_month)
                    }
                    if (element.order_month === "April") {
                        aprArray.push(element.order_month)
                    }
                    if (element.order_month === "May") {
                        mayArray.push(element.order_month)
                    }
                    if (element.order_month === "June") {
                        junArray.push(element.order_month)
                    }
                    if (element.order_month === "July") {
                        julyArray.push(element.order_month)
                    }
                    if (element.order_month === "August") {
                        augArray.push(element.order_month)
                    }
                    if (element.order_month === "September") {
                        septArray.push(element.order_month)
                    }
                    if (element.order_month === "October") {
                        octArray.push(element.order_month)
                    }
                    if (element.order_month === "November") {
                        novArray.push(element.order_month)
                    }
                    if (element.order_month === "December") {
                        decArray.push(element.order_month)
                    }
                });
            })

            // console.log("array " + septArray);
            setChartData({ jan: janArray.length, sept: septArray.length })
            // console.log(`chart data ${chartData}`)


        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getData();
    })


    const data = {//purchases made
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Subscibers',
            // data: [2, 9, 4, 8, 12, 5, 1, 4, 0, 0, 0, 0],
            data: [chartData.jan, chartData.feb, chartData.mar, chartData.apr, chartData.may, chartData.jun, 0, 0, chartData.sept, 0, 0, 0],
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