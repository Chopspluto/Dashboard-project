import React, { Fragment, useEffect, useState } from 'react';
// import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import PieChart from '../charts/PieChart';
import BarChart from '../charts/BarChart';
import LineChart from '../charts/LineChart';
import Table from '../charts/Table';

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


    // search filter
    const [query, setQuery] = useState("");

    const [userData, setUserData] = useState([]);

    const search = (data) => {
        return data.filter(item =>
            item.user_name.toLowerCase().includes(query) ||
            item.user_email.toLowerCase().includes(query));
    }

    const getUsers = async () => {
        try {
            const response = await fetch("http://localhost:5000/data/users", {
                method: "GET",
                headers: { token: localStorage.token }
            });

            const getData = await response.json();
            setUserData(getData);

        } catch (err) {
            console.error(err)
        }
    }


    useEffect(() => {
        getName();
        getUsers();
    }, []);

    return (
        <>
            <div className='w-screen h-screen flex'>
                <div className='w-1/5'>
                    <aside className=''>
                        {/* <div className='flex justify-end p-4'><MenuIcon /></div> */}
                        <div className='flex justify-center pt-32'>
                            <input type={'text'} placeholder={"Search by name"} onChange={(e) => setQuery(e.target.value)} />
                        </div>
                        <div className='flex justify-center'>
                            <button>Apply</button>
                        </div>
                    </aside>
                </div>
                <div className='w-4/5 overflow-scroll'>
                    <div className='flex flex-col'>
                        <header className='px-4 pt-4 h-40 w-full flex flex-row justify-between'>
                            <h1>Financial Dashboard of a Discount Store</h1>
                            <div className='flex flex-col'>
                                <div className='p-4 uppercase'>Welcome <strong>{name}</strong></div>
                                <button className='logout flex items-center justify-center' onClick={e => logout(e)}>Logout&nbsp;&nbsp;&nbsp;<LogoutIcon/></button>
                            </div>
                        </header>
                        <hr/>
                        <div className='chart-container'>
                            <div className='chart'><PieChart /></div>
                            <div className='chart'><BarChart /></div>
                            <div className='chart'><LineChart /></div>
                        </div>
                        <hr/>
                        <div className=''>
                            <Table tableData={search(userData)} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard