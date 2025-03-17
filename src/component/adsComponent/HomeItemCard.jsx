import React from "react";

const HomeItemCard = ({ item }) => (
    <div className="col-md-6">
        <div className="text-light d-flex flex-column align-items-center justify-content-center rounded-4 p-2 py-5 w-100" style={{ backgroundColor: "#9747FF", height: "8rem" }}>
            <div className="d-flex w-100 justify-content-around align-items-baseline gap-5">
                <h6>{item.name}</h6>
                <h2>...</h2>
            </div>
            <h1 className="w-75">{item.number}</h1>
        </div>
    </div>
);

export default HomeItemCard;