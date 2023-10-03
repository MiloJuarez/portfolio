import React from "react";
import axios from "axios";

import "../styles/footer.css";
import GitHubLogo from "../assets/icons/github-logo.png";
import LinkedInLogo from "../assets/icons/linkedin-logo.png";
import endpoints from "../services/api/endpoints";

const Footer = () => {
    const sendForm = () => {
        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const subject = document.getElementById("subject");
        let stop = false;

        Array.from([name, email, subject]).forEach((input) => {
            if (!input.checkValidity()) {
                input.style.border = "1px solid red";
                stop = true;
            } else {
                input.style.border = "none";
            }
        });

        let msgError = document.getElementById("Contact__error");
        msgError.innerText = "Fill all required fields";
        msgError.style.display = stop ? "block" : "none";
        if (stop) {
            return;
        }

        const data = {
            name: name.value,
            email: email.value,
            message: subject.value,
        };

        axios
            .post(endpoints.contact, data)
            .then((response) => {
                let msgSuccess = document.getElementById("Contact__success");
                msgSuccess.innerText = "Message sent successfully!";
                let form = document.querySelector(".Footer__contactme form");
                form.reset();
                hideElement(msgSuccess);
            })
            .catch((error) => {
                msgError.innerText = "An error occured. Try again later";
                hideElement(msgError);
            });
    };

    const hideElement = (elment) => {
        elment.style.display = "block";

        setTimeout(() => {
            elment.style.display = "none";
        }, 4500);
    };

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
                            <span id='Contact__error'></span>
                            <span id='Contact__success'></span>
                            <div className='Contact__form-name'>
                                <label htmlFor='name'>Name *</label>
                                <input
                                    type='text'
                                    name='name'
                                    id='name'
                                    required
                                />
                            </div>
                            <div className='Contact__form-email'>
                                <label htmlFor='email'>Email *</label>
                                <input
                                    type='email'
                                    name='email'
                                    id='email'
                                    placeholder='example@example'
                                    required
                                />
                            </div>
                            <div className='Contact__form-subject'>
                                <label htmlFor='subject'>Subject *</label>
                                <textarea
                                    type='text'
                                    name='subject'
                                    id='subject'
                                    rows={4}
                                    required
                                />
                            </div>
                            <small>
                                <i>Required fields ( * )</i>
                            </small>
                        </div>
                        <br />
                        <button
                            type='button'
                            className='Contact__form-submit'
                            onClick={() => sendForm()}>
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
