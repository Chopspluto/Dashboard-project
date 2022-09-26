import React, { Fragment, useEffect, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

function Dashboard({setAuth}) {

    const[name, setName] = useState("");

    useEffect

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