import React from 'react';
import InputField from './InputField';

const EventDescription = ({ state, onChange, errors }) => (
    <div className="mb-3 text-end">
        <InputField maxLength={120} label="وصف كامل" placeholder="أدخل وصف كامل" name="des" value={state.des} onChange={onChange} isTxtArea error={errors.des} />
    </div>
);

export default EventDescription;