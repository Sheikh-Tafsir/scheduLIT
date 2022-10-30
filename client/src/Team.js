import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
const Team = () => {
  return (
    <div>   
        <div className="team">
            <h2>Team</h2>
            <div className="teamcard"  data-aos="zoom-in"  data-aos-anchor-placemeny="bottom-bottom">
              <div className="cardbg">
              <img src="https://scontent.fdac140-1.fna.fbcdn.net/v/t1.6435-9/153811546_1838027449680554_4747449446470884106_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=4pMy-azlhdEAX_9Jqkw&_nc_ht=scontent.fdac140-1.fna&oh=00_AT_S1X8zCInG-d6NGC20zbRqfC3BTftVXHpHukhLHM8s4A&oe=635FDF78" height="280rem" width="280rem"/>
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