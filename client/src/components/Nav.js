import React from 'react';
import Logo from '../imgs/logo.PNG';

const Nav = () => {
    return (
        <div className="mx-2 px-40 md:mx-auto font-poppin items-center">
            <nav className='flex justify-between flex-wrap items-center py-10'>
                <img className='w-21 min-w-[200px] flex flex-wrap items-center h-20 rounded-full cursor-pointer' src={Logo} alt='logo' />
                <ul className='flex items-center gap-3'>
                    <div className='flex flex-wrap items-center gap-2 place-content-end'>
                        <h1 className='text-3xl font-medium'>Invoices</h1>
                    </div>
                </ul>
            </nav>
        </div>
    )
};

export default Nav;
