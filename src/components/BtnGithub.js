import React from 'react'

function BtnGithub(prop) {
  return (
    <button className='btn-git-repository' onClick={()=>window.location.href=prop.gitRepository}> <i className="bi bi-github"></i> View on Github </button>
  )
}

export default BtnGithub