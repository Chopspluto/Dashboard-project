import React, { Fragment, useEffect, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { pieChart } from '../charts/pieChart';
import { barChart } from '../charts/barChart';
import { lineChart } from '../charts/lineChart';

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
            <div className='w-screen h-screen flex'>
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
                <main>
                    <pieChart />
                    <barChart />
                    <lineChart />
                </main>
            </div>
        </>
    )
}

export default Dashboard