import React from 'react';
import {Chart as ChartJs, P, CategoryScale, LinearScale} from 'chart.js';
import {Pie} from 'react-chartjs-2';

ChartJs.register(
    CategoryScale,
    LinearScale,
    BarElement)

function PieChart() {
    return (
        <h1>pieChart</h1>
    )
}

export default PieChart;