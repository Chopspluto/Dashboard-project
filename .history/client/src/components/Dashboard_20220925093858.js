import React, { Fragment, useEffect, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

function Dashboard({setAuth}) {

    const[name, setName] = useState("");

    async function getName(){
        try {
            const response = await fetch("http://localhost:5000/dashboard/", {
                method: "GET",
                headers: {token: localStorage.token}
            })
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getName();
    })

    return (
        <Fragment>
            <div className='w-screen h-screen'>
                <aside className='w-1/5'>
                    <div className='flex justify-end p-4'><MenuIcon /></div>
                    <div className='flex justify-center'>
                        <button>Apply</button>
                    </div>
                </aside>
                <div className='container'>
                    <button>Logout</button>
                </div>
            </div>
        </Fragment>
    )
}

export default Dashboard