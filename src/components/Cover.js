import React, { useState } from 'react'
import earth1 from "../Video/earth2.mp4"
import myself1 from '../images/myself1.jpg'
import myself2 from '../images/myself2.jpg'

function Cover() {
    const [changeImage, setChangeImage] = useState(false)

    const handleHover = () => {
        setChangeImage(!changeImage);
      };
  return (
    <div className='cover'>
        <video muted loop>
          <source src={earth1} type="video/mp4" />
        </video>
        <div className='content'>
          <div className='myself' onMouseEnter={handleHover} onMouseLeave={handleHover}>
            <img src={changeImage ? myself2:myself1} />
            <div>
              <p id="greeting"> Hi there 👋 <br></br>  I'm <b> DIEGO ESPINOSA </b></p>
              <p id="into"> I'm into Web Development!</p>
              <button> Contact Me </button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Cover
