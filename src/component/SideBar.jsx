import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCalendar, faPaperclip, faGear } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const SideBar = () => {
    const menuItems = [
        { name: "الرئيسية", path: "/", icon: faHome },
        { name: "الفعاليات", path: "/Events", icon: faCalendar },
        { name: "الإعلانات", path: "/ads", icon: faPaperclip },
        { name: "الإعدادات", path: "/settings", icon: faGear }
    ];

    const [activeTab, setActiveTab] = useState(menuItems[0].name)

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
                    onClick={() => setActiveTab(item.name)

                    }
                >
                    {item.name}
                    <FontAwesomeIcon icon={item.icon} className="my-auto mx-2" />
                </NavLink>
            ))}
        </div>
    );
};

export default SideBar;
