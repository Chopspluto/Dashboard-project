import React, { Fragment, useEffect, useState } from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import FilterListIcon from '@mui/icons-material/FilterList';
import PieChart from '../charts/PieChart';
import BarChart from '../charts/BarChart';
import LineChart from '../charts/LineChart';
import Table from '../charts/Table';
import Clock from './Clock';

function Dashboard({ setAuth }) {

    const [name, setName] = useState(""); // display name
    // ------ Verify token and login user
    async function getName() {
        try {
            const response = await fetch("http://localhost:5000/dashboard", {
                method: "GET",
                headers: { token: localStorage.token }
            });

            const parseResponse = await response.json();
            // console.log(parseResponse);

            setName(parseResponse.user_name)
        } catch (err) {
            console.error(err.message);
        }
    }

    // ------ Logout
    const logout = (e) => {// clear local storage token
        e.preventDefault();
        localStorage.removeItem("token");
        setAuth(false)
    }

    // ------ search filter
    const [query, setQuery] = useState(""); // search query
    // 
    const search = (data) => {
        return data.filter(item =>
            item.user_name.toLowerCase().includes(query) ||
            item.user_email.toLowerCase().includes(query));
    }
    // 
    // --------- Get users
    const [userData, setUserData] = useState([]);
    // 
    const getUsers = async () => {
        try {
            const response = await fetch("http://localhost:5000/data/users", {
                method: "GET",
                headers: { token: localStorage.token }
            });

            const getData = await response.json();
            setUserData(getData);
            setFilterToggle(false)

        } catch (err) {
            console.error(err)
        }
    }

    // -----    DROPDOWN FILTER
    const [filter, setFilter] = useState('Filter price by..');
    const [filterToggle, setFilterToggle] = useState(false);

    const onChange = e => {
        setFilter(e.target.value)
    }

    async function ascendingFilter() {
        try {
            const response = await fetch("http://localhost:5000/data/users/pricelowhigh", {
                method: "GET",
                headers: { token: localStorage.token }
            });

            const parseResponse = await response.json();
            setUserData(parseResponse);
            setFilterToggle(true);
            return filterToggle;

        } catch (err) {
            console.error(err.message);
        }
    }

    async function descendingFilter() {
        try {
            const response = await fetch("http://localhost:5000/data/users/pricehighlow", {
                method: "GET",
                headers: { token: localStorage.token }
            });

            const parseResponse = await response.json();
            setUserData(parseResponse);
            setFilterToggle(true);
            return filterToggle;

        } catch (err) {
            console.error(err.message);
        }
    }


    const submit = (e) => {
        if (filter === "ascending") {
            console.log("Ascending order");
            ascendingFilter();
        }
        if (filter === "descending") {
            console.log("Descending order")
            descendingFilter()
        }
        if (filter === "none") {
            getUsers();
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
                    <aside className='pt-8'>
                        <div className='flex justify-center'>
                            <Clock />
                        </div>
                        <div className='flex pl-8'>
                            <h6 className='uppercase text-center font-medium'>Filters&nbsp;&nbsp;&nbsp;</h6><FilterListIcon />
                        </div>
                        <div className='flex justify-center pt-4'>
                            <input type={'text'} placeholder={"Search by name"} onChange={(e) => setQuery(e.target.value)} />
                        </div>

                        <select value={filter} onChange={onChange} placeholder={filter}>
                            <option value="none">Filter by Order Date</option>
                            <option value="ascending">Low to High</option>
                            <option value="descending">High to Low</option>
                        </select>
                        <div className='flex justify-center'>
                            <button onClick={submit}>Apply</button>
                        </div>

                    </aside>
                </div>
                <div className='w-4/5 overflow-scroll'>
                    <div className='flex flex-col'>
                        <header className='pr-8 pt-8 h-40 w-full flex flex-row justify-between'>
                            <h1>Financial Dashboard of a Discount Store</h1>
                            <div className='flex flex-col'>
                                <div className='p-4 uppercase'>Welcome <strong>{name}</strong></div>
                                <button className='logout flex items-center justify-center' onClick={e => logout(e)}>Logout&nbsp;&nbsp;&nbsp;<LogoutIcon /></button>
                            </div>
                        </header>
                        <hr />
                        <div className='chart-container'>
                            <div className='chart'><PieChart /></div>
                            <div className='chart'><BarChart /></div>
                            <div className='chart'><LineChart /></div>
                        </div>
                        <hr />
                        <div className='pb-8'>
                            <Table tableData={search(userData)} filterToggle={filterToggle} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard