import React, { useState } from 'react';
import Carrosel from '../components/fragments/Carrosel';
import { NavLink } from 'react-router-dom';
import img from '../components/assets/spaceship.png';
import img2 from '../components/assets/microservicosCartao.png';
import img3 from '../components/assets/relatorios.png';
import img4 from '../components/assets/contadorDeDinheiro.png';
import img5 from '../components/assets/api_carros.png'
import style from '../components/styles/scss/Pages.module.scss';
import { javaTitle } from '../components/texts/TextoProjetos';
import { ButtonGitHub } from '../components/fragments/Button';

const JavaProjects: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: img,
      legend: 'SpaceShip 2D',
    },
    {
      src: img2,
      legend: 'Serviços Cartão'
    },
    {
      src: img3,
      legend: 'Jasper Relatórios'
    },
    {
      src: img4,
      legend: 'Contador Dinheiro'
    },
    {
      src: img5,
      legend: 'Api de carros'
    }

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
          <h2>{javaTitle[currentIndex].title}</h2>
          <p>{javaTitle[currentIndex].texto}</p>
          <p>Caso esteja interessado no código, visite meu GitHub clicando no ícone ou no link abaixo:</p>
          <span><NavLink to="https://github.com/guilhermedevsecops">https://github.com/guilhermedevsecops</NavLink></span>
          <span><NavLink to="https://github.com/guilhermedevsecops"><ButtonGitHub /></NavLink></span>
        </div>
      </div>
    </div>
  );
}

export default JavaProjects;
