import React from 'react';
import InputField from './InputField';

const EventLocation = ({ state, onChange, errors }) => (
    <div className="row mb-3 text-end">
        <div className="col-md-6 text-end">
            <InputField maxLength={10} label="الموقع" placeholder="اختر الموقع" name="location" value={state.location} onChange={onChange} error={errors.location} />
        </div>
        <div className="col-md-6">
            <InputField maxLength={10} label="العنوان إذا كان غير متصل" placeholder="ادخل العنوان" name="address" value={state.address} onChange={onChange} error={errors.address} />
        </div>
    </div>
);

export default EventLocation;