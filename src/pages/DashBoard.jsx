import React from 'react'
import Navbar from '../component/Navbar'
import SideBar from '../component/SideBar'
import { Outlet } from "react-router-dom";
const DashBoard = () => {
    return (
        <>
            <div className="">
                <Navbar />

                <div className="dashBoardContent row g-4  my-4">
                    <div className='col-md-8 col-sm-12'>
                        <Outlet />
                    </div>

                    <div className='col-md-4 col-sm-12 '>
                        <SideBar />

                    </div>

                </div>

            </div>
        </>
    )
}

export default DashBoard
