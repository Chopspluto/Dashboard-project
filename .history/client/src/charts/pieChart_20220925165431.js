import React from 'react';
import {Chart as ChartJs, ArcElement, Tooltip, Legend} from 'chart.js';
import {Pie} from 'react-chartjs-2';

ChartJs.register(
    Tooltip,
    Legend,
    ArcElement)

function PieChart() {
    return (
        <h1>pieChart</h1>
    )
}

export default PieChart;