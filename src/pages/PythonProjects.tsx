import React, { useState } from 'react';
import Carrosel from '../components/fragments/Carrosel';
import { NavLink } from 'react-router-dom';
import img from '../components/assets/pingPython.png';
import img2 from '../components/assets/conversor.png';
import style from '../components/styles/scss/Pages.module.scss';
import { python } from '../components/texts/TextoProjetos';
import { ButtonGitHub } from '../components/fragments/Button';

const PythonProjects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: img,
      legend: '',
    },
    {
      src: img2,
      legend: ''
    },
    

  ];

  const handleCarouselChange = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className={style.containerDiv}>
      <div>
        <h1>Java</h1>
      </div>
      <div className={style.container}>
        <div>
          <Carrosel images={images} onChange={handleCarouselChange} />
        </div>
        <div className={style.texts}>
          <h2>{python[currentIndex].title}</h2>
          <p>{python[currentIndex].texto}</p>
          <p>Caso esteja interessado no código, visite meu GitHub clicando no ícone ou no link abaixo:</p>
          <span><NavLink to="https://github.com/guilhermedevsecops">https://github.com/guilhermedevsecops</NavLink></span>
          <span><NavLink to="https://github.com/guilhermedevsecops"><ButtonGitHub /></NavLink></span>
        </div>
      </div>
    </div>
  );
}


export default PythonProjects



