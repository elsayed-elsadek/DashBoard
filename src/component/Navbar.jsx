import React from 'react'
import adminImg from '../assets/adminImg.png'
const Navbar = () => {
    return (
        <>
            <div className="d-flex justify-content-between align-items-center">
                <img src={adminImg} alt="adminImg" className=""
                    style={{ borderRadius: "50%", width: "4rem" }} />
                <h2 className='text-danger '>* لوحة التحكم</h2>
            </div>
        </>
    )
}

export default Navbar
