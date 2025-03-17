import React from 'react';
import InputField from './InputField';

const EventDateTime = ({ state, onChange, errors }) => (
    <div className="row mb-3 text-end">
        <div className="col-md-6">
            <InputField maxLength={10} label="التاريخ" placeholder="اختر التاريخ" name="date" value={state.date} onChange={onChange} error={errors.date}

            />
        </div>
        <div className="col-md-6">
            <InputField maxLength={10} label="الوقت (بداية - نهاية)" placeholder="اختر الوقت" name="time" value={state.time} onChange={onChange} error={errors.time} />
        </div>
    </div>
);

export default EventDateTime;