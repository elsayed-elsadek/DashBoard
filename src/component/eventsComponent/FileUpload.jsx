import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';

const FileUpload = ({ img, onChange }) => (
    <div className="d-grid align-items-center p-4 text-center rounded-4 mb-3 justify-content-center m-auto"
        style={{ border: "dashed 1.8px", height: "12rem", width: "75%" }}>
        <input type="file" multiple className="d-none" id="fileUpload" onChange={onChange} />
        <label htmlFor="fileUpload" className="text-black-50 cursor-pointer">
            <FontAwesomeIcon icon={faPaperclip} />
            <br />
            {img ? (
                <img src={img} alt="preview" style={{ width: "50px", margin: "5px" }} />
            ) : "Add an attachment (optional)"}
        </label>
    </div>
);

export default FileUpload;