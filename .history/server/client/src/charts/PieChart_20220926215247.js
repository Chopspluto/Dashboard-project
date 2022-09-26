import React, { useState } from 'react';
import { Chart as ChartJs, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJs.register(
    Tooltip,
    Legend,
    ArcElement)

function PieChart() {

    const[chartData, setChartData] = useState({
        FDSS: [], US: [], FSN: [], MCSS: [], PGSS: []
    });
    const fdss = [], us=[], fsn=[], mcss=[], pgss=[];

    async function getData(){
        try {
            const response = await fetch("http://localhost:5000/data/users/products", {
                
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