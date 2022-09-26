import React, { Fragment } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

function Dashboard() {
    return (
        <>
            <div className='w-screen h-screen'>
                <aside className='w-1/5'>
                    <div className='flex justify-end p-4'><MenuIcon /></div>
                    <button>Apply</button>
                </aside>
            </div>
        </>
    )
}

export default Dashboard