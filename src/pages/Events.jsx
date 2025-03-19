import React, { useState, useEffect } from "react";
import EventCard from "../component/eventsComponent/EventCard ";
import { initialEvents } from "../data/data/events";
import AddEvent from "../component/eventsComponent/AddEvent";

const Events = () => {
    const [events, setEvents] = useState(() => {
        const savedEvents = localStorage.getItem("events");
        return savedEvents ? JSON.parse(savedEvents) : initialEvents;
    });

    const [eventToEdit, setEventToEdit] = useState(null); // حالة لتتبع الحدث المحدد للتحرير

    useEffect(() => {
        try {
            localStorage.setItem("events", JSON.stringify(events));
        } catch (error) {
            console.error("Failed to save events to localStorage:", error);
        }
    }, [events]);

    const handleDelete = (id) => {
        // عرض رسالة تأكيد
        const isConfirmed = window.confirm("هل أنت متأكد أنك تريد حذف هذا الحدث؟");

        // إذا وافق المستخدم على الحذف
        if (isConfirmed) {
            setEvents((prevEvents) => prevEvents.filter((event) => event.id !== id));
        }
    };

    const handleEdit = (updatedEvent) => {


        setEvents((prevEvents) =>
            prevEvents.map((event) =>
                event.id === updatedEvent.id ? updatedEvent : event
            )
        );
        setEventToEdit(null); // إعادة تعيين حالة التحرير بعد التحديث
    };

    const handleAddEvent = (newEvent) => {
        setEvents((prevEvents) => [...prevEvents, newEvent]);
    };

    return (
        <div style={{ position: "relative", top: "170px" }}>
            <h3 className="text-end mb-5">ادارة الفعاليات</h3>

            {events.length === 0 ? (
                <div className="text-center">
                    <p style={{ fontSize: "18px", color: "#666" }}>لا توجد أحداث لعرضها.</p>
                </div>
            ) : (
                <div className="events row g-4 justify-content-center justify-content-md-end">
                    {events.map((event) => (
                        <EventCard
                            key={event.id}
                            event={event}
                            onDelete={handleDelete}
                            onEdit={() => setEventToEdit(event)} // تمرير الحدث المحدد للتحرير
                        />
                    ))}
                </div>
            )}

            <AddEvent onAddEvent={handleAddEvent} eventToEdit={eventToEdit} onEdit={handleEdit} />
        </div>
    );
};

export default Events;