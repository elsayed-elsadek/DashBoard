import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CategoryCard = ({ icon, label, onClick, isSelected }) => (
    <div
        className={`d-flex justify-content-between align-items-center border rounded-4 p-3 mb-3 cursor-pointer`}
        onClick={onClick}
    >
        <div className="form-check form-switch">
            <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                checked={isSelected}
                onChange={() => { }}
                style={{ width: "50px", height: "30px" }}
            />
        </div>
        <div className="d-flex align-items-center gap-2">
            <FontAwesomeIcon icon={icon} />
            <p className="m-0">{label}</p>
        </div>
    </div>
);

export default CategoryCard;