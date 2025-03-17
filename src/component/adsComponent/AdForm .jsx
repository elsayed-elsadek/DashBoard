import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";

const AdForm = ({ ad, onChange, onImageChange, onSubmit, isEditing }) => (
    <div className="container text-end" id="addAds">
        <h3 className="fw-bold mt-4">{isEditing ? "تعديل الإعلان" : "إضافة إعلان جديد"}</h3>
        <p className="">تحميل الصورة</p>
        <div className="d-grid align-items-center p-4 text-center rounded-4 mb-3 justify-content-center m-auto"
            style={{ border: "dashed 1.8px #9747FF", height: "12rem", width: "75%" }}>
            <input type="file" multiple onChange={onImageChange} className="d-none" id="fileUpload" />
            <label htmlFor="fileUpload" className="text-black-50 cursor-pointer">
                <FontAwesomeIcon icon={faPaperclip} />
                <br />
                {ad.images.length > 0 ? ad.images.map((img, idx) => (
                    <img key={idx} src={img} alt="preview" style={{ width: "50px", margin: "5px" }} />
                )) : "Add an attachment (optional)"}
            </label>
        </div>

        <div className="row my-4">
            <div className="col-md-6">
                <label style={{ color: "#9747FF" }}>عنوان الإعلان</label>
                <input type="text" name="name" value={ad.name} onChange={onChange} className="form-control rounded-4 p-2 px-3 text-end" placeholder="أدخل عنوان الإعلان هنا" style={{ backgroundColor: "#26323833" }} />
            </div>
            <div className="col-md-6">
                <label style={{ color: "#9747FF" }}>رابط الإعلان</label>
                <input type="text" name="description" value={ad.description} onChange={onChange} className="form-control rounded-4 p-2 px-3 text-end" placeholder="أدخل رابط الإعلان هنا" style={{ backgroundColor: "#26323833" }} />
            </div>
        </div>

        <div className="text-center">
            <button onClick={onSubmit} className="btn px-4 py-2 rounded-4 text-light" style={{ backgroundColor: "#9747FF", border: "none" }}>
                {isEditing ? "تحديث الإعلان" : "حفظ الإعلان"}
            </button>
        </div>
    </div>
);

export default AdForm;