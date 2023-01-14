import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import './Error.css'
import erroring from '../../Componte/Assarts/Image/404paiew.png'
const Error = () => {
    const error = useRouteError()
    return (
        <div>
            <div className="error-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="error-page">
                                <img src={erroring} alt="" />
                                <h1 className="mb-4">{error.statusText || error.message}</h1>
                                <Link to={'/'}>Go To Home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Error;