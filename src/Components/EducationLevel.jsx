import React from "react";

import "../styles/educationlevel.css";

const EducationLevel = ({ school, logo }) => {
    return (
        <div className='EducationLevel'>
            <h2 className='EducationLevel__label'>Education level</h2>
            <div className='EducationLevel__container'>
                <div className='row'>
                    <div className='cel'>School</div>
                    <div className='cel'>
                        <a href={school.website} target='_blank'>
                            <img src={logo} alt={school.name} />
                        </a>
                    </div>
                </div>
                <div className='row'>
                    <div className='cel'>Career</div>
                    <div className='cel'>{school.career}</div>
                </div>
                <div className='row'>
                    <div className='cel'>Generation</div>
                    <div className='cel'>{school.period}</div>
                </div>
            </div>
        </div>
    );
};

export default EducationLevel;
