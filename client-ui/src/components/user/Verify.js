import React from "react";
import { Link } from "react-router-dom";

const Verify = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 shadow-lg rounded-lg">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">
                    Vui lòng vào email để xác thực!
                </h1>
                <Link to="/login" className="text-blue-500 hover:underline text-lg">
                    Đã xác thực? Đăng nhập ngay
                </Link>
            </div>
        </div>
    );
};

export default Verify;