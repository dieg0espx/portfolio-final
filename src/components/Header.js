import { useEffect } from "react";
import React from 'react'

function Header() {
    useEffect(() => {
        const handleScroll = () => {
          const header = document.querySelector('.header');
          const scrollThreshold = 10;
          if (window.scrollY > scrollThreshold) {
            header.classList.add('scrolled');
          } else {
            header.classList.remove('scrolled');
          }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
          // Cleanup the event listener on component unmount
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

  return (
    <div className='header'>
        <h1> Diego Espinosa </h1>
        <div className='menu'>
            <button> Home </button>
            <button> Experience </button>
            <button> Eductation </button>
            <button> Contact </button>
        </div>
        <button className="mobileMenu"> <i className="bi bi-list"></i> </button>
    </div>
  )
}

export default Header