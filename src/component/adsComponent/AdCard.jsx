import React from "react";
import AdSlider from "./AdSlider ";

const AdCard = ({ ad, index, onEdit, onDelete }) => (
    <div className="d-grid d-lg-flex justify-content-lg-between justify-content-center align-items-center px-5 py-3 rounded-4" style={{ backgroundColor: "#9747FF" }}>
        <div style={{ width: "200px", height: "100px", position: "relative", overflow: "hidden", margin: "10px 0" }}>
            <AdSlider images={ad.images} />
        </div>
        <div className="d-grid gap-3 text-center">
            <div>
                <h6 className="m-0">{ad.name}</h6>
                <p className="fs-6">{ad.description}</p>
            </div>
            <div>
                <button className="btn btn-light border border-2 mx-2 rounded-4" style={{ color: "#9747FF" }} onClick={() => onEdit(index)}>تعديل</button>
                <button className="btn btn-close-white border border-2 mx-2 rounded-4 btn-outline-warning" onClick={() => onDelete(index)}>حذف</button>
            </div>
        </div>
    </div>
);

export default AdCard;