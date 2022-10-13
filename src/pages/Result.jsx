import React from 'react';
import mock from "./asset/mock.jpg"

const Result = () => {
    return (
        <div className='container'>
            <h4>Kết quả</h4>
            <div className="row">
                <div className="col-sm p-1">
                    <img src={mock} alt='mock' width="100%" />
                </div>
                <div className="col-sm p-1">
                    <img src={mock} alt='mock' width="100%" />
                </div>
                <div className="col-sm p-1">
                    <img src={mock} alt='mock' width="100%" />
                </div>
            </div>

        </div>
    );
}

export default Result;
