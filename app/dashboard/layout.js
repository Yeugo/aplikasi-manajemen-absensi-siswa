import React from 'react';
import SideNav from './_component/SideNav';
import Header from './_component/Header';

function layout({children}) {
    return (
        <div>
            <div className='md:w-64 fixed hidden md:block'>
                <SideNav/>
            </div>
            <div className='md:ml-64'>
                <Header/>
                {children}
            </div> 
        </div>
    );
}

export default layout;
