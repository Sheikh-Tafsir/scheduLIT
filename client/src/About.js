import React from 'react'
import {FaBriefcase} from "react-icons/fa";
const About = () => {
  return (
    <>
        <div className="abt" id="About" >
          <h2>About Us</h2>
          <div className="abtmnu" >
            <div className="abtimg">
              <div className="abtimgbg">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Five_arches_in_front_of_IUT_mosque_at_Gazipur%2C_Bangladesh.JPG/1200px-Five_arches_in_front_of_IUT_mosque_at_Gazipur%2C_Bangladesh.JPG" height="480rem" width="350rem" id="abtimag2" data-aos="fade-right" data-aos-duration="500" data-aos-delay="1000" data-aos-anchor-placemeny="bottom-bottom"/>
                <img src="http://photos.wikimapia.org/p/00/02/20/01/86_big.jpg" height="400rem" width="300rem" id="abtimag" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="250" data-aos-anchor-placemeny="bottom-bottom"/>
              </div>
            </div>
            <div className="abtdesc" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="50" data-aos-anchor-placemeny="bottom-bottom">
              <h2>More Information about</h2>
              <h2>Islamic Unoversity of Technology</h2>
              <p id="abtdescp">Islamic University of Technology, commonly known as IUT, is an international university located in Gazipur, Bangladesh. IUT offers undergraduate and graduate programmes in Engineering and Technical Education. The university is the only international Engineering university in Bangladesh.</p>
              <button>Contact Me</button>
            </div>
          </div>
        </div>
    </>
  )
}

export default About