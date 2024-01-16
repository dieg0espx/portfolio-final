import React from 'react'

function BtnLiveSite(prop) {
  return (
    <button className='btn-live-site' onClick={()=>window.location.href=prop.url}> <i className="bi bi-browser-safari"></i> View Live Site </button>
  )
}

export default BtnLiveSite