import React from 'react';

const InputField = ({ label, placeholder, name, value, onChange, maxLength, isTextArea = false, error }) => (
    <div className="mb-3">
        <label className="form-label">{label}</label>
        {isTextArea ? (
            <textarea
                className={`form-control rounded-4 p-3 ${error ? 'is-invalid' : ''}`}
                placeholder={placeholder}
                style={{ backgroundColor: "#E0BFB81F" }}
                name={name}
                value={value}
                onChange={onChange}
                maxLength={maxLength}

            />
        ) : (
            <input
                className={`form-control rounded-4 p-3 ${error ? 'is-invalid' : ''}`}
                type="text"
                placeholder={placeholder}
                style={{ backgroundColor: "#E0BFB81F" }}
                name={name}
                value={value}
                onChange={onChange}
                maxLength={maxLength}
            />
        )}
        {error && <div className="invalid-feedback text-end">{error}</div>}
    </div>
);

export default InputField;