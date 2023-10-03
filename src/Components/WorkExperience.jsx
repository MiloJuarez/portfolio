import React from "react";

import "../styles/workexperience.css";

const WorkExperience = ({ workExperience, uniqueId }) => {
    return (
        <article className='WorkExperience'>
            <div className='WorkExperience__enterprise'>
                <h4 className='WorkExperience__enterprise-label'>
                    <a
                        href={workExperience.url}
                        target='_blank'
                        rel='noopener noreferrer'>
                        {workExperience.enterprise}
                    </a>
                </h4>
                <p>({workExperience.modality})</p>
            </div>
            <div className='WorkExperience__content'>
                <div className='WorkExperience__period'>
                    {workExperience.startDate} - {workExperience.endDate}
                </div>
                <div className='WorkExperience__position'>
                    {workExperience.position}
                </div>
                <div className='WorkExperience__tasks'>
                    <span>Tasks</span>
                    <div>{workExperience.tasks}</div>
                </div>
                <div className='WorkExperience__tools'>
                    <span>Tools</span>
                    <div>
                        {workExperience.tools.map((tool) => (
                            <div className='WorkTool' key={tool}>
                                {tool}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </article>
    );
};

export default WorkExperience;
