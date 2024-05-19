import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import style from '../styles/scss/Footer.module.scss';


const Footer = () => {
  return (
    <div className={style.footer}>
      <div>
        <div className={style.icons}>
          <NavLink to="https://www.linkedin.com/in/guilhermedevsec/"><span><FaLinkedin /></span></NavLink>
          <NavLink to="https://github.com/guilhermedevsecops"><span><FaGithub/></span></NavLink>
        </div>
        <div>
            <span>Development by &copy; guilhermedevsec</span>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default Footer