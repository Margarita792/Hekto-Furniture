import style from './DiscountItem.module.css';
import image1 from '../../../assets/HomePage/DiscountItem/Ellipse 64.svg';
import image2 from '../../../assets/HomePage/DiscountItem/tortuga-01-b 1.png';
import { useTranslation } from 'react-i18next';

function DiscountItem() {
    const { t } = useTranslation();
    return (
        <div className={style.container}>
            <p className={style.titleСontainer}>{t("discountItem.title")}</p>
            <div className={style.wrapTitle}>
                <p className={style.textRed}>{t("discountItem.category1")}</p>
                <p className={style.textBlue}>{t("discountItem.category2")}</p>
                <p className={style.textBlue}>{t("discountItem.category3")}</p>
            </div>

            <div className={style.wrapper}>
                <div className={style.sectionText}>
                    <p className={style.titleSectionText}>{t("discountItem.discountTitle")}</p>
                    <p className={style.redTextSectionText}>{t("discountItem.productName")}</p>
                    <p className={style.desctiption}>{t("discountItem.description")}</p>
                    <div className={style.wrapperText}>
                        <p className={style.text}>{t("discountItem.point1")}</p>
                        <p className={style.text}>{t("discountItem.point2")}</p>
                        <p className={style.text}>{t("discountItem.point3")}</p>
                        <p className={style.text}>{t("discountItem.point4")}</p>
                    </div>
                    <button className={style.button}>{t("discountItem.button")}</button>
                </div>
                <div className={style.wrapperImage}>
                    <img className={style.image1} src={image1} alt="" />
                    <img className={style.image2} src={image2} alt="" />
                </div>
            </div>
        </div>
    );
}

export default DiscountItem;