import React from 'react';
import user from '../../Componte/Assarts/Image/blog.webp'
import './Welcome.css'
const Welcome = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="welcome">
                            <div className="image-user"  style={{background: `url(${user})`}}>

                            </div>
                            <h3>Amit Kumar Paul</h3>
                            <p>WelCome My Dashboard</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;