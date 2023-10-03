import React from "react";

import "../styles/profile.css";
import utsLogo from "../assets/img/logo-uts.png";
import workExperiences from "../utils/workExperiences";

import Header from "../Components/Header";
import TypingEffect from "../Components/TypingEffect";
import EducationLevel from "../Components/EducationLevel";
import WorkExperienceList from "../containers/WorkExperienceList";

const Profile = () => {
    return (
        <div className='profile'>
            <Header
                profile={"PHP Backend developer"}
                name={"ING. ERMILO SILVINO JUÁREZ GORDILLO"}
            />
            <p className='profile__description'>
                <TypingEffect
                    text={`Cuento con más de dos años de experiencia en el desarrollo de aplicaciones a la medida. Me gusta mantenerme en constante aprendizaje para un mejor crecimiento profesional y así mantenerme actualizado con las nuevas tecnologías enfocadas al desarrollo Web`}
                    delay={30}
                />
            </p>
            <EducationLevel
                school={{
                    name: "Universida Tecnológica de la selva",
                    career: "Engineer in Information Tecnologies",
                    period: "2017-2021",
                    website: "http://www.utselva.edu.mx/",
                }}
                logo={utsLogo}
            />

            <WorkExperienceList workExperienceList={workExperiences} />
        </div>
    );
};

export default Profile;
