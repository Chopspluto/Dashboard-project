import React from 'react';
import {Chart as ChartJs, BarElement} from 'chart.js';
import {Bar} from 'react-chartjs-2';

ChartJs.register(Bar)

function BarChart() {
    return (
        <div></div>
    )
}

export default BarChart