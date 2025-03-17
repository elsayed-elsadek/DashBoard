import React from 'react';
import InputField from './InputField';
import SelectField from './SelectField';

const EventRegistration = ({ state, onChange, errors }) => (
    <div className="row mb-3 text-end">
        <div className="col-md-6">
            <InputField maxLength={100} label="رابط التسجيل" placeholder="أدخل رابط التسجيل" name="registrationLink" value={state.registrationLink} onChange={onChange} error={errors.registrationLink} />
        </div>
        <div className="col-md-6">
            <SelectField
                label="مجاني/مدفوع"
                name="eventType"
                value={state.eventType}
                onChange={onChange}
                options={[
                    { value: 'free', label: 'مدفوع' },
                    { value: 'paid', label: 'مجاني' }
                ]}
                error={errors.eventType}
            />
        </div>
    </div>
);

export default EventRegistration;