import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
const Team = () => {
  return (
    <div>   
        <div className="team">
            <h2>Team</h2>
            <div className="teamcard"  data-aos="zoom-in"  data-aos-anchor-placemeny="bottom-bottom">
              <div className="cardbg">
              <img src="https://scontent.fdac140-1.fna.fbcdn.net/v/t1.6435-9/153811546_1838027449680554_4747449446470884106_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGf1fXZOrV6aJpTzdUsz2DCW3rzMKCssWBbevMwoKyxYJJvUNcn8Yhrmah_ToaK3nIsS6teAcTt5wEf4yoSRbts&_nc_ohc=Jxl9CoWSYpwAX-781Pn&_nc_ht=scontent.fdac140-1.fna&oh=00_AfAHOU3E1-Wx6eXzFQ7fr4rUO4oxk1Plj4fJ5fiS3_RGrQ&oe=63949B78" height="280rem" width="280rem"/>
                <div className="carddesc">
                  <h3>Arafat Amin</h3>
                  <p>Software Engineer</p>
                  <div className="teamicons">
                    <a href="https://www.facebook.com/tmr.rahman"><FaFacebook className="footicon"></FaFacebook></a>
                    <a href="https://www.instagram.com/sheikh_tafsir_rahman"><FaInstagram className="footicon"></FaInstagram></a>
                    <a href="#"><FaTwitter className="footicon"></FaTwitter></a>
                  </div>
                </div>
              </div>
              <div className="cardbg" >
              <img src="https://avatars.githubusercontent.com/u/38831382?v=4" height="280rem" width="280rem"/>
                <div className="carddesc">
                  <h3>Abid Hasan</h3>
                  <p>Software Engineer</p>
                  <div className="teamicons">
                    <a href="https://www.facebook.com/tmr.rahman"><FaFacebook className="footicon"></FaFacebook></a>
                    <a href="https://www.instagram.com/sheikh_tafsir_rahman"><FaInstagram className="footicon"></FaInstagram></a>
                    <a href="#"><FaTwitter className="footicon"></FaTwitter></a>
                  </div>
                </div>
              </div>
              <div className="cardbg">
                <img src="https://i.ibb.co/ZY3wqCh/119266110-1229743677378093-5041812434358770382-n.jpg" height="280rem" width="280rem"/>
                <div className="carddesc">
                  <h3>Tafsir Rahman</h3>
                  <p>Software Engineer</p>
                  <div className="teamicons">
                    <a href="https://www.facebook.com/tmr.rahman"><FaFacebook className="footicon"></FaFacebook></a>
                    <a href="https://www.instagram.com/sheikh_tafsir_rahman"><FaInstagram className="footicon"></FaInstagram></a>
                    <a href="#"><FaTwitter className="footicon"></FaTwitter></a>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Team