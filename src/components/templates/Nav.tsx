import React, { useState } from 'react'
import style from '../styles/scss/Nav.module.scss'
import { GiCoffeeCup } from "react-icons/gi";
import { FaDatabase, FaNodeJs, FaWindows, FaLinux, FaDocker } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { IoMenu, IoClose } from 'react-icons/io5';
import { useChangePage } from '../../config/hooks/useChangePage';
import { NavLink } from 'react-router-dom';
import { IoHome } from "react-icons/io5";


export const MobilleNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div>
        <button className={style.hamburger} onClick={toggleMenu}>
          {isOpen ? <IoClose /> : <IoMenu />}
        </button>
      <div className={`${style.mobille} ${isOpen ? style.open : ''}`}>
        <ul>
          <NavLink to="/home" onClick={closeMenu}><li id="home" value="home"><span><IoHome /></span><p>Home</p></li></NavLink>
          <NavLink to="/java" onClick={closeMenu}><li id="java" value="java"><span><GiCoffeeCup /></span><p>Java</p></li></NavLink>
          <NavLink to="/python" onClick={closeMenu}><li id="python" value="python"><span><FaDatabase /></span><p>Python</p></li></NavLink>
          <NavLink to="/nodejs" onClick={closeMenu}><li id="nodejs" value="nodejs"><span><FaNodeJs /></span><p>JavaScript</p></li></NavLink>
        </ul>
      </div>
    </div>
  );
};

export const SideNav = () => {
  
  

    
  return (
    <nav className={style.sideNav}>
      <ul>
        <NavLink to="/home"><li id="home" value="home"><span><IoHome/></span><p>Home</p></li></NavLink>
        <NavLink to="/java"><li id="java" value="java" ><span><GiCoffeeCup /></span><p>Java</p></li></NavLink>
        <NavLink to="/python"><li id="python" value="python" ><span><FaDatabase /></span><p>Python</p></li></NavLink>
        <NavLink to="/nodejs"><li id="nodejs" value="nodejs" ><span><FaNodeJs /></span><p>JavaScript</p></li></NavLink>
        {/*<NavLink to="/cybersecurity"><li id="cybersecurity" value="cybersecurity" ><span><MdOutlineSecurity /></span><p>Security</p></li></NavLink>
        <NavLink to="/database"><li id="database" value="database" ><span><FaDatabase /></span><p>Database</p></li></NavLink>
        <NavLink to="/docker"><li id="docker" value="docker" ><span><FaDocker/></span><p>Docker</p></li></NavLink>
        <NavLink to="/windows"><li id="windows" value="windows" ><span><FaWindows/></span><p>Windows</p></li></NavLink>
  <NavLink to="/linux"><li id="linux" value="linux" ><span><FaLinux/></span><p>Linux</p></li></NavLink>*/}
      </ul>
    </nav>
  )
}

