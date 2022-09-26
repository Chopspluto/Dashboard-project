import React, { Fragment } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

function Dashboard() {
    return (
        <>
            <div className='container'>
                <aside className=''>
                    <MenuIcon sx={{ color: '#000000', fontSize: 40 }} />
                </aside>
                <h1>Dashboard</h1>
            </div>
        </>
    )
}

export default Dashboard