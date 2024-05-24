import React, { useState } from 'react';
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
  };  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className={style.containerDiv}>
      <div>
        <h1>NodeJS</h1>
      </div>
      <div className={style.geral}>
      <div className={style.container}>
        <div className={style.carrousel}>
          <img className={style.image} src={images[currentIndex].src} alt={`Image ${currentIndex + 1}`} />
          <div className={style.button}>
            <button className={style.btn1} onClick={prevSlide}>Anterior</button>
            <button onClick={nextSlide}>Próximo</button>
        </div>
        </div>
        <div className={style.texts}>
          <h2>{javaScript[currentIndex].title}</h2>
          <p>{javaScript[currentIndex].texto}</p>
          <p>Caso esteja interessado no código, visite meu GitHub clicando no ícone ou no link abaixo:</p>
          <span className={style.links}><NavLink to="https://github.com/guilhermedevsecops">https://github.com/guilhermedevsecops</NavLink></span>
        </div>
      </div>
    </div>
    </div>
   );
}

export default NodeJS;
