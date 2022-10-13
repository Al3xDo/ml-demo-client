import React from 'react';
import logo from './asset/logo-uit.png'
const Heading = () => {
    return (
        <div>
            <img src={logo} alt="logo" width={60} className="mt-5" />
        <div className="m-auto"></div>
            <h1>Ứng dụng truy vấn hình ảnh điện thoại</h1>
        </div>
    );
}

export default Heading;
