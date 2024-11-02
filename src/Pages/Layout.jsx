import React, { useContext } from 'react'

import { Link, Outlet, useLocation } from 'react-router-dom'
import Sidebar from '../Components/Sidebar';
import Header from '../Components/Header';
import { useState, createContext } from "react";

export const SidebarContext = createContext();
function Layout() {

    const [sidebar, setSidebar] = useState(false);

    return (

        <div className='flex flex-row min-h-screen max-w-screen h-auto ' >
            <SidebarContext.Provider value={{ sidebar, setSidebar }}>
                {sidebar && <Sidebar 
                />}


                <div className='bg-gray-200 flex-1 ' >
                    <Header />
                    <div className='p-5'>
                        <Outlet />
                    </div>
                </div>
            </SidebarContext.Provider>
        </div>


    )
}
export default Layout 