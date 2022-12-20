import "../css/Contact.css"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';



export default function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_x5cq88t', 'template_no5h3l2', form.current, 'dY85TYyS_o3y51J4c')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset()
    };

    return (
        
        <div className="contactcontainer" id="contactpage">
            <div className="aboutme" >Contact</div>
            <div className="intro">Reach me</div>
            <div className="contact-email">
                <form ref={form} onSubmit={sendEmail} className="emailform">
                    <div className="infogeral">
                        <div className="info12">
                            <div className="namelabel">
                                <label className="namelabel1">Name</label>
                                <input type="text" name="name" className="emailname" />
                            </div>
                            <div className="emaillabel">
                                <label className="maillabel1">Email</label>
                                <input type="email" name="email" className="emailmail" />
                            </div>
                        </div>

                        <div className="messageabel">
                            <label className="meslabel1">Message</label>
                            <textarea name="message" className="emailmessage" />
                        </div>
                    </div>
                    <button type="submit" className="sendbutton"><span>Contact me</span></button>

                </form>
            </div>
        </div>
    )
}