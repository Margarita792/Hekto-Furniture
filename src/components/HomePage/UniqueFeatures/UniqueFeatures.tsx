import style from './UniqueFeatures.module.css';
import ellipse from '../../../assets/HomePage/UniqueFeatures/Ellipse 63.svg';
import sofa from '../../../assets/HomePage/UniqueFeatures/Home-Stylish-Club-Sofa-Chair-Pleated-Sofa-Armchair-with-Golden-Legs 1.svg';
import icon1 from '../../../assets/HomePage/UniqueFeatures/Ellipse 65.svg';
import icon2 from '../../../assets/HomePage/UniqueFeatures/Ellipse 66.svg';
import icon3 from '../../../assets/HomePage/UniqueFeatures/Ellipse 67.svg';
import { useTranslation } from "react-i18next";

function UniqueFeatures() {
    const { t } = useTranslation();
    
    return (
        <div className={style.container}>
            <div className={style.wrapImage}>
                <img  className={style.ellipse} src={ellipse} alt="" />
                <img className={style.sofa} src={sofa} alt="" />
            </div>
            <div className={style.wrapText}>
            <p className={style.title}>{t("uniqueFeatures.title")}</p>
                <div className={style.innerIconsText}>
                    <img src={icon1} alt="" />
                    <p className={style.text}>{t("uniqueFeatures.feature1")}</p>
                </div>
                <div className={style.innerIconsText}>
                    <img src={icon2} alt="" />
                    <p className={style.text}>{t("uniqueFeatures.feature2")}</p>
                </div>
                <div className={style.innerIconsText}>
                    <img src={icon3} alt="" />
                    <p className={style.text}>{t("uniqueFeatures.feature3")}</p>
                </div>
                <div className={style.wrapButtonText}>
                <button className={style.button}>{t("uniqueFeatures.button")}</button>
                    <div className={style.innerPrice}>
                    <p className={style.textItalianSofa}>{t("uniqueFeatures.productName")}</p>
                        <p className={style.textPrice}>$32.00</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UniqueFeatures;