import React from 'react';
import {Chart as ChartJs, Line, Tooltip, Legend} from 'chart.js';
import {Pie} from 'react-chartjs-2';

ChartJs.register(
    Tooltip,
    Legend,
    ArcElement)

function LineChart() {
    return (
        <h1>LineChart</h1>
    )
}

export default LineChart