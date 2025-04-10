import NavPage from "../GridDefault/NavPage/NavPage";
import Header from "../HomePage/Header/Header";
import image1 from '../../assets/OrderCompleted/Vector 16.svg';
import image2 from '../../assets/OrderCompleted/Ellipse 70.svg';
import image3 from '../../assets/OrderCompleted/Vector 15.svg';
import clock from '../../assets/OrderCompleted/clock 1.svg';
import checklist from '../../assets/OrderCompleted/checklist 1.svg';
import style from './OrderCompleted.module.css'
import Artboards from "../HomePage/Artboards/Artboards";
import Foooter from "../HomePage/Footer/Footer";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";


function OrderCompleted() {
    const navigate = useNavigate();
    const { t } = useTranslation();
    return (<>
        <Header />
        <NavPage title={t("orderCompleted.pageTitle")} redText={t("orderCompleted.pageTitle")} />
        <div className={style.containerOrderCompleted}>
            <img className={style.clock} src={clock} alt="" />
            
            <div className={style.wrapper}>
                <div className={style.wrapImage}>
                    <img className={style.image1} src={image1} alt="" />
                    <img className={style.image2} src={image2} alt="" />
                    <img className={style.image3} src={image3} alt="" />
                </div>
                <p className={style.title}>{t("orderCompleted.title")}</p>
          <p className={style.text}>{t("orderCompleted.description")}</p>
          <button onClick={() => navigate("/gridDefault")} className={style.button}> {t("orderCompleted.button")} </button>
            </div>
            <img className={style.checklist} src={checklist} alt="" />
        </div>
        <Artboards />
        <Foooter />
    </>)
}

export default OrderCompleted;