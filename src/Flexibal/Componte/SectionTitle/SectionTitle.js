import React from 'react';
import './SectionTitle.css'

const SectionTitle = ({title, ditties}) => {
    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <div className="section-title-area">
                        <h1>{title}</h1>
                        <p>{ditties}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionTitle;