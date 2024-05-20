import React from 'react'
import style from '../styles/scss/Button.module.scss';
import { FaGithub } from "react-icons/fa";

export const ButtonGitHub = () => {
  return (
    <div className={style.buttonGitHub}><span><FaGithub/></span></div>
  )
}

