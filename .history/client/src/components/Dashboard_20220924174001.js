import React, { Fragment } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

function Dashboard() {
    return (
        <>
            <div className='w-screen h-screen'>
                <aside className='w-3/12  flex'>
                    <div className='flex'><MenuIcon /></div>
                </aside>
            </div>
        </>
    )
}

export default Dashboard