import React from 'react'
import logo from '../assets/2.png';
import style from '../styles/scss/Header.module.scss';

const Header = () => {
  
  return (
      <div>
        <div className={style.containerImg}>
          <img className={style.img} src={logo} />
        </div>
      </div>
  )
}

export default Header