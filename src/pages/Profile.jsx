import React from "react";

import "../styles/profile.css";

import Header from "../Components/Header";

const Profile = () => {
    return (
        <div className='profile'>
            <Header
                profile={"PHP Backend developer"}
                name={"ING. ERMILO SILVINO JUÁREZ GORDILLO"}
            />
            <p className='profile__description'>
                Cuento con más de un año de experiencia en el desarrollo de
                aplicaciones a la medida. Me gusta mantenerme en constante
                aprendizaje para un mejor crecimiento profesional y así
                mantenerme actualizado con las nuevas tecnologías enfocadas al
                desarrollo Web
            </p>
        </div>
    );
};

export default Profile;
