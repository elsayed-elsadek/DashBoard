import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="d-flex justify-content-center  ">
            <div className="text-center">
                <h1 className="display-1">404</h1>
                <p className="lead">الصفحة التي تبحث عنها غير موجودة.</p>
                <Link to="/" className="btn text-light p-2" style={{ backgroundColor: "#9747FF" }}>العودة إلى الصفحة الرئيسية</Link>
            </div>
        </div>
    );
};

export default NotFound;