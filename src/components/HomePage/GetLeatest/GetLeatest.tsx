import style from './GetLeatest.module.css';
import image from '../../../assets/HomePage/GetLeatest/Rectangle 102.png';
import { useTranslation } from 'react-i18next';

function GetLeatest() {
    const { t } = useTranslation();
    return (
        <div className={style.container}>
<img className={style.image} src={image} alt="" />
<div className={style.wrapper}>
  
    <p className={style.text}>{t("GetLeatest.subscribeText")}</p>
    
    <button className={style.button}>{t("GetLeatest.buttonText")}</button>
</div>
        </div>
    )
}
export default GetLeatest;