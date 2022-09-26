import React from 'react';
import {Chart as ChartJs, LineElement, PointElement, CategoryScale, LinearScale} from 'chart.js';
import {Pie} from 'react-chartjs-2';

ChartJs.register(
    CategoryScale,
    LinearScale,
    ArcElement)

function LineChart() {
    return (
        <h1>LineChart</h1>
    )
}

export default LineChart