import React from 'react';
import InputField from './InputField';

const EventDetails = ({ state, onChange, errors }) => (
    <div className="row mb-3">
        <div className="col-md-6 text-end">
            <InputField maxLength={20} label="عوامل الحدث" placeholder="أدخل عوامل الحدث" name="name" value={state.name} onChange={onChange} error={errors.name} />
        </div>
        <div className="col-md-6 text-end">
            <InputField maxLength={30} label="وصف قصير" placeholder="أدخل وصف قصير" name="shortdes" value={state.shortdes} onChange={onChange} error={errors.shortdes} />
        </div>
    </div>
);

export default EventDetails;