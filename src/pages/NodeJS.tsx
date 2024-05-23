import React, { useState } from 'react';
import Carrosel from '../components/fragments/Carrosel';
import { NavLink } from 'react-router-dom';
import img from '../components/assets/cronometro.png';
import img2 from '../components/assets/SecretWord.png';
import img3 from '../components/assets/MiniBlog.png';
import img4 from '../components/assets/ControleDeContas.png';
import style from '../components/styles/scss/Pages.module.scss';
import { javaScript } from '../components/texts/TextoProjetos';
import { ButtonGitHub } from '../components/fragments/Button';

const NodeJS: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: img,
      legend: 'Cronometro',
    },
    {
      src : img2,
      legend : 'Secret Word'
    },
    {
      src : img3,
      legend : 'MiniBlog'
    },
    {
      src : img4,
      legend : 'Controle de Contas'
    }


  ];

  const handleCarouselChange = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className={style.containerDiv}>
      <div>
        <h1>JavaScript</h1>
      </div>
      <div className={style.container}>
        <div>
          <Carrosel images={images} onChange={handleCarouselChange} />
        </div>
        <div className={style.texts}>
          <h2>{javaScript[currentIndex].title}</h2>
          <p>{javaScript[currentIndex].texto}</p>
          <p>Caso esteja interessado no código, visite meu GitHub clicando no ícone ou no link abaixo:</p>
          <span><NavLink to="https://github.com/guilhermedevsecops">https://github.com/guilhermedevsecops</NavLink></span>
          <span><NavLink to="https://github.com/guilhermedevsecops"><ButtonGitHub /></NavLink></span>
        </div>
      </div>
    </div>
  );
}

export default NodeJS;
