import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import style from '../styles/scss/Carrocel.module.scss';

interface Image {
    src: string;
    legend: string;
}

interface CarroselProps {
    images: Image[];
    onChange: (index: number) => void;
}

const Carrosel: React.FC<CarroselProps> = ({ images, onChange }) => {
    return (
        <div className={style.carrousel}>
            <Carousel onChange={onChange}>
                {images.map((image, index) => (
                    <div key={index}>
                        <img className={style.image} src={image.src} alt={`Image ${index + 1}`} />
                        <p className="legend">{image.legend}</p>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

export default Carrosel;