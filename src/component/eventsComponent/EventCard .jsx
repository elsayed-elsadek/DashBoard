import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faClock, faLocation } from "@fortawesome/free-solid-svg-icons";

const EventCard = ({ event, onDelete, onEdit }) => {
    const lastSection = document.getElementById("add-evevnt-section");

    return (
        <div className="col-md-6 col-lg-6 shadow-sm p-3 position-relative eventCart" >
            <div className="d-flex flex-column flex-lg-row gap-3 eventcontent">
                <div className="d-grid text-end">
                    <h5>{event.name}</h5>
                    <p className="text-black-50" style={{ fontSize: "14px" }}>{event.des}</p>

                    <div className="d-flex justify-content-end w-100">
                        <div className="d-flex align-items-center justify-content-center gap-2">
                            <p className="d-flex align-items-center gap-1" style={{ fontSize: "14px" }}>
                                {event.time}
                                <FontAwesomeIcon icon={faClock} style={{ color: "#00E7CC" }} />
                            </p>
                            <p className="d-flex align-items-center gap-1" style={{ fontSize: "14px" }}>
                                {event.date}
                                <FontAwesomeIcon icon={faCalendar} style={{ color: "#00E7CC" }} />
                            </p>

                        </div>
                    </div>

                    <div className="d-flex justify-content-between mt-2 align-items-center">
                        <div>
                            <button
                                className="btn border border-2 mx-2 rounded-4 text-light"
                                style={{ backgroundColor: "#9747FF" }}
                                onClick={() => {
                                    onEdit(event); lastSection.scrollIntoView({ behavior: "smooth" });;
                                }}
                            >
                                تعديل
                            </button>
                            <button
                                className="btn btn-danger border border-2 mx-2 rounded-4"
                                onClick={() => onDelete(event.id)}
                            >
                                حذف
                            </button>
                        </div>

                        <div>
                            <p className="d-flex align-items-center gap-1" style={{ fontSize: "14px" }}>
                                {event.location}
                                <FontAwesomeIcon icon={faLocation} style={{ color: "#00E7CC" }} />
                            </p>
                        </div>
                    </div>
                </div>

                <img src={event.img} alt="eventImg" className="rounded-4 img-fluid" style={{ maxWidth: "100px", height: "100px" }} />
            </div>

            <div className={`position-absolute p-2 rounded-4 ${event.eventType === 'free' ? 'bg-danger text-light' : ''}`} style={{ backgroundColor: "#00F8FF", top: "0" }}>
                {event.eventType === 'free' ? 'مدفوع' : 'مجاني'}
            </div>
        </div>
    );
};

export default EventCard;