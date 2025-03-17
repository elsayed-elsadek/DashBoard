import React from 'react';

const SelectField = ({ label, name, value, onChange, options, error }) => (
    <div className="mb-3">
        <label className="form-label">{label}</label>
        <select
            className={`form-select rounded-4 p-3 ${error ? 'is-invalid' : ''}`}
            style={{ backgroundColor: "#E0BFB81F" }}
            name={name}
            value={value}
            onChange={onChange}
        >
            <option value="" disabled>اختر الخيار</option>
            {options.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
            ))}
        </select>
        {error && <div className="invalid-feedback text-end">{error}</div>}
    </div>
);

export default SelectField;