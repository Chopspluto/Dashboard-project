import React, { Fragment } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

function Dashboard() {
    return (
        <>
            <div className='container'>
                <aside>
                    <MenuIcon sx={{ color: '#' }} />
                </aside>
                <h1>Dashboard</h1>
            </div>
        </>
    )
}

export default Dashboard