import React from 'react'

const Gallery = () => {
  return (
    <div className="gallery">
        <h2>Gallery</h2>
        <div className="gall" data-aos="flip-up"  data-aos-anchor-placemeny="bottom-bottom">
            <img src="https://iutaa.com/static/media/iutaa.banner.4f524892.jpg" alt="a"></img>
            <img src="https://prod-media-eng.dhakatribune.com/uploads/2020/01/iutaa-reunion-2020-1578579421409.jpg" alt="b"/>
            <img src="https://i.ytimg.com/vi/Xhu__BTxy0A/maxresdefault.jpg" alt="b"/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Five_arches_in_front_of_IUT_mosque_at_Gazipur%2C_Bangladesh.JPG/1200px-Five_arches_in_front_of_IUT_mosque_at_Gazipur%2C_Bangladesh.JPG"/>
            <img src="http://photos.wikimapia.org/p/00/02/20/01/86_big.jpg"/>
        </div>
    </div>
  )
}

export default Gallery