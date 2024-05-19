import React, { useState } from 'react'
import style from '../styles/scss/Nav.module.scss'
import { GiCoffeeCup } from "react-icons/gi";
import { FaDocker } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { FaWindows } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";
import { useChangePage } from '../../config/hooks/useChangePage';
import { NavLink } from 'react-router-dom';
export const Nav = () => {
  return (
    <div>Nav</div>
  )
}

export const SideNav = () => {
  
  

    
  return (
    <nav className={style.sideNav}>
      <ul>
        <NavLink to="/home"><li id="home" value="home"><span></span><p>Inicio</p></li></NavLink>
        <NavLink to="/java"><li id="java" value="java" ><span><GiCoffeeCup /></span><p>Java</p></li></NavLink>
        <NavLink to="/python"><li id="python" value="python" ><span><FaDatabase /></span><p>Python</p></li></NavLink>
        <NavLink to="/nodejs"><li id="nodejs" value="nodejs" ><span><FaNodeJs /></span><p>NodeJS</p></li></NavLink>
        <NavLink to="/cybersecurity"><li id="cybersecurity" value="cybersecurity" ><span><MdOutlineSecurity /></span><p>CyberSecurity</p></li></NavLink>
        <NavLink to="/database"><li id="database" value="database" ><span><FaDatabase /></span><p>Database</p></li></NavLink>
        <NavLink to="/docker"><li id="docker" value="docker" ><span><FaDocker/></span><p>Docker</p></li></NavLink>
        <NavLink to="/windows"><li id="windows" value="windows" ><span><FaWindows/></span><p>Windows</p></li></NavLink>
        <NavLink to="/linux"><li id="linux" value="linux" ><span><FaLinux/></span><p>Linux</p></li></NavLink>


      </ul>
    </nav>
  )
}

