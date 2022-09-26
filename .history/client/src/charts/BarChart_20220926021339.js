import React, { useEffect, useState } from 'react';
import { Chart as ChartJs, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJs.register(
    CategoryScale,
    LinearScale,
    BarElement)

function BarChart() {
    fetch("http://localhost:5000/data/users/registerbymonth"

    

    return (
        <>
            <Bar data={chartData} height={280} />
        </>
    )
}

export default BarChart