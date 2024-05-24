import { useChangePageAutomatic } from '../config/hooks/useChangePage'
import style from '../components/styles/scss/Openning.module.scss';
import logo from '../components/assets/2.png';

const Openning = () => {

    useChangePageAutomatic(4000);

    return (
        <div className={style.geral}>
            <div className={style.container}>
                <img src={logo} />
            </div>
        </div>
    )
}

export default Openning