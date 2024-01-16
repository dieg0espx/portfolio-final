import React from 'react'
import dashboard1 from '../images/ttf1.png'
import BtnGithub from './BtnGithub'
import BtnLiveSite from './BtnLiveSite'

function Ttfscaffolding() {
  return (
    <div className='ttf-scaffolding'>
        <div className='side-line'></div>
        <div>
            <div className="type-of-work">
                <i className="bi bi-rocket-takeoff iconTitle"></i>
                <p> Full Enviroment</p>
            </div>
            
            <h2> TTF SCAFFOLDING </h2>
            <h3> From crafting <span className="bold">clients website </span> to mastering system control, I turn visions into seamless solutions.</h3>
            <div className='view-btns'>
                <BtnGithub gitRepository="https://github.com/dieg0espx/dashboard-TTF.git"></BtnGithub>
                <BtnLiveSite url="https://ttfconstruction.com"></BtnLiveSite>
            </div>

            <img src={dashboard1} id="dashboard" />
        </div>
    </div>
  )
}

export default Ttfscaffolding