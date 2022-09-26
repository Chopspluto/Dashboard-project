import React, { Fragment, useEffect, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import PieChart from '../charts/PieChart';
import BarChart from '../charts/BarChart';
import LineChart from '../charts/LineChart';

function Dashboard({ setAuth }) {

    const [name, setName] = useState("");

    async function getName() {
        try {
            const response = await fetch("http://localhost:5000/dashboard", {
                method: "GET",
                headers: { token: localStorage.token }
            });

            const parseResponse = await response.json();
            console.log(parseResponse);

            setName(parseResponse.user_name)

        } catch (err) {
            console.error(err.message);
        }
    }

    const logout = (e) => {// clear local storage token
        e.preventDefault();
        localStorage.removeItem("token");
        setAuth(false)
    }

    useEffect(() => {
        getName();
    }, [])

    return (
        <>
            <div className='w-screen h-screen flex flex-col'>
                <aside className='w-1/5'>
                    <div className='flex justify-end p-4'><MenuIcon /></div>
                    <div className='flex justify-center'>
                        <button>Apply</button>
                    </div>
                </aside>
                <header className='p-4 h-40 w-full flex flex-row justify-end'>
                    <div className='flex flex-col'>
                        <div className='p-4'>Welcome <strong>{name}</strong></div>
                        <button className='logout' onClick={e => logout(e)}>Logout</button>
                    </div>
                </header>
                <div className='p-4 flex flex-row'>
                    <PieChart />
                    <BarChart />
                    <LineChart />
                </div>
            </div>
        </>
    )
}

export default Dashboard