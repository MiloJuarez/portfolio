import React from "react";

import "../styles/footer.css";
import GitHubLogo from "../assets/icons/github-logo.png";
import LinkedInLogo from "../assets/icons/linkedin-logo.png";

const Footer = () => {
    return (
        <div className='Footer'>
            <div className='Footer__content'>
                <div className='Footer__social'>
                    <a
                        href='https://github.com/MiloJuarez'
                        target='_blank'
                        rel='canonical'>
                        <img src={GitHubLogo} alt='MiloJuarez' />
                        <span>GitHub</span>
                    </a>
                    <a
                        href='https://www.linkedin.com/in/ermilo-silvino-ju%C3%A1rez-gordillo-679071226/'
                        target='_blank'
                        rel='canonical'>
                        <img
                            src={LinkedInLogo}
                            alt='Ermilo Silvino Juarez Gordillo'
                        />
                        <span>LinkedIn</span>
                    </a>
                </div>
                <div className='Footer__contactme'>
                    <form action='#' method='post'>
                        <h3>Contact</h3>
                        <div className='Contact__content'>
                            <div className='Contact__form-name'>
                                <label htmlFor='name'>Name</label>
                                <input type='text' name='name' id='name' />
                            </div>
                            <div className='Contact__form-email'>
                                <label htmlFor='email'>Email</label>
                                <input
                                    type='email'
                                    name='email'
                                    id='email'
                                    placeholder='example@example'
                                />
                            </div>
                            <div className='Contact__form-subject'>
                                <label htmlFor='subject'>Subject</label>
                                <textarea
                                    type='text'
                                    name='subject'
                                    id='subject'
                                    rows={4}
                                />
                            </div>
                        </div>
                        <button type='button' className='Contact__form-submit'>
                            Send
                        </button>
                    </form>
                </div>
            </div>
            <div className='Footer__info'>
                <p>
                    Developed by{" "}
                    <a
                        href='http://devappis.com'
                        target='_blank'
                        rel='noopener noreferrer'>
                        DevAppis
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Footer;
