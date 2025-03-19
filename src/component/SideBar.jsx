import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCalendar, faPaperclip, faGear } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useLocation } from 'react-router-dom';

const SideBar = () => {
    const menuItems = [
        { name: "الرئيسية", path: "/", icon: faHome },
        { name: "الفعاليات", path: "/events", icon: faCalendar },
        { name: "الإعلانات", path: "/ads", icon: faPaperclip },
        { name: "الإعدادات", path: "/settings", icon: faGear }
    ];

    const location = useLocation();
    const [activeTab, setActiveTab] = useState(menuItems.find(item => item.path === location.pathname)?.name || menuItems[0].name);

    useEffect(() => {
        const currentItem = menuItems.find(item => item.path === location.pathname);
        if (currentItem) {
            setActiveTab(currentItem.name);
        }
    }, [location]);

    return (
        <div className="d-flex flex-column gap-3">
            {menuItems.map((item, index) => (
                <NavLink
                    to={item.path}
                    key={index}
                    className={`d-flex align-items-center justify-content-end p-2 text-decoration-none ${activeTab === item.name ? 'activeTab' : ''}`}
                    style={{
                        backgroundColor: activeTab === item.name ? '#9747FF' : 'transparent',
                        color: activeTab === item.name ? 'white' : 'black',
                        cursor: 'pointer',
                        borderRadius: '8px'
                    }}
                    onClick={() => setActiveTab(item.name)}
                >
                    {item.name}
                    <FontAwesomeIcon icon={item.icon} className="my-auto mx-2" />
                </NavLink>
            ))}
        </div>
    );
};

export default SideBar;