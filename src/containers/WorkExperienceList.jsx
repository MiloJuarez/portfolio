import React from "react";

import "../styles/workexperiencelist.css";

import WorkExperience from "../Components/WorkExperience";

const WorkExperienceList = ({ workExperienceList }) => {
    return (
        <div className='WorkExperienceList'>
            <h2 className='WorkExperienceList__label'>Work experiences</h2>
            <div className='WorkExperienceList__container'>
                {workExperienceList.map((workExperience) => (
                    <WorkExperience workExperience={workExperience} />
                ))}
            </div>
        </div>
    );
};

export default WorkExperienceList;
