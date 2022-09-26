import React from 'react';
import { Chart as ChartJs, LineElement, PointElement, CategoryScale, LinearScale } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJs.register(
    CategoryScale,
    LinearScale,
    LineElement, PointElement)

function LineChart() {

    var data = {
        labels: ['Floral Desktop Stationery Set', 'Unicorn Set', 'Fluorescent sticky notes', 'Metallic Cups & Straw Set', 'Purple Glitter Stationery Set'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
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