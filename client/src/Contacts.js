import React from 'react'

import { FaWhatsapp } from 'react-icons/fa';
import { FaFacebookMessenger } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import { AiOutlineMail} from 'react-icons/ai';

const Contacts = () => {
  return (
    <div>
        <div className="cntk" id="Contacts">
            <h2>Contact Us</h2>
            <div className="cntkmnu">
                <div className="cntkbar">
                    <h3>Talk with us</h3>
                    <div className="cntkpnt" data-aos="fade-right" data-aos-duration="1000" data-aos-anchor-placemeny="center-center">
                        <AiOutlineMail className="cntkpnticons"></AiOutlineMail>
                        <h4>Email</h4>
                        <p>190041130tafsir@gmail.com</p>
                        <button><a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqTflxmKpkQKmTDWwrCjJwCJlgDlPDzVtvxXRtkzzsLDwhfVsLhxncRQmPctlQvvMJNnhL" target="_blank" className="cntkpntbut">Mail Us <FaArrowRight className="arricon"></FaArrowRight></a></button>
                    </div>
                    <div className="cntkpnt" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200" data-aos-anchor-placemeny="center-center">
                        <FaWhatsapp className="cntkpnticons"></FaWhatsapp>
                        <h4>WhatsApp</h4>
                        <p>01817530115</p>
                        <button><a href="https://web.whatsapp.com/" target="_blank" className="cntkpntbut">Text Us <FaArrowRight className="arricon"></FaArrowRight></a></button>
                    </div>
                    <div className="cntkpnt" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400" data-aos-anchor-placemeny="center-center">
                        <FaFacebookMessenger className="cntkpnticons"></FaFacebookMessenger>
                        <h4>Messenger</h4>
                        <p>Team PiedPiper</p>
                        <button><a href="#"  className="cntkpntbut">Text Us <FaArrowRight className="arricon"></FaArrowRight></a></button>
                    </div>
                </div>
                <div className="mailbar">
                    <h3>Contact us about your problem</h3>
                    <form class="con-form" action="https://formspree.io/f/xeqnvlln" method="POST" data-aos="fade-left" data-aos-anchor-placemeny="bottom-bottom">
                        <p>Name</p><input type="text" id="mname" placeholder="Insert Your Name" name="Name" required />
                        <p>Email</p><input type="email" id="email" placeholder="Insert Your Emaiil" name="Email" required />
                        <p>Detail</p><textarea id="message" placeholder="Problems you faced" name="needs" required></textarea><br/>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contacts