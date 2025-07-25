import React from 'react';

const ContactSection = () => {
    return (
        <div className="contact-section">
            <div className="left-content">
                <ul className="navitem">
                    <li >Events</li>
                    <li >Gen AI</li>
                    <li >Careers</li>
                    <li >Case study</li>
                    <li >SME Talks</li>
                </ul>

                <div className="contact-text">
                    <p>
                        For any collaborative 
                        projects or enquiries feel free 
                        to connect with us.
                    </p>
                    <p className="website">vayuz.com</p>
                </div>
            </div>

            <div className="right-form">
                <h1>
                    Connect <br /> With Us
                </h1>
                <form>
                    <input type="text" placeholder="Full Name" />
                    <input type="email" placeholder="Email" />
                    <input type="tel" placeholder="Phone Number" />
                    <button type="submit">SUBMIT</button>
                </form>
            </div>
        </div>
    );
};

export default ContactSection;
