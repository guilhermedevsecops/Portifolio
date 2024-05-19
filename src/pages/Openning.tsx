import {useChangePageAutomatic} from '../config/hooks/useChangePage'
import style from '../components/styles/scss/Openning.module.scss';
import logo from '../components/assets/2.png';

const Openning = () => {
    
  useChangePageAutomatic(10000);
  
 return (
    <div className={style.container}>
        <div className={style.animation}>
            <div>
                <h2><span></span></h2>
                <h1>Guilherme DevSecOpS</h1>
            </div>
            <div className={style.logo}>
                <img src={logo}/>
            </div>
        </div>
        <div className={style.teste}>
            <ul>
                <li>Cybersecurity</li>
                <li>Development</li>
                <li>Database</li>
                <li>And More ...</li>
            </ul>          
        </div>
    </div>
  )
}

export default Openning