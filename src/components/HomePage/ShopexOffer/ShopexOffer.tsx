import style from './ShopexOffer.module.css';
import image1 from '../../../assets/HomePage/ShopexOffer/Group.svg';
import image2 from '../../../assets/HomePage/ShopexOffer/cashback 1.svg';
import image3 from '../../../assets/HomePage/ShopexOffer/premium-quality 1.svg';
import image4 from '../../../assets/HomePage/ShopexOffer/24-hours-support 1.svg';
import { useTranslation } from "react-i18next";

function ShopexOffer() {
  const { t } = useTranslation();

  return (
    <div className={style.container}>
      <p className={style.title}>{t("shopexOffer.title")}</p>
      <div className={style.wrapper}>
        <div className={style.wrapCard}>
          <div className={style.card}>
            <img className={style.image} src={image1} alt="" />
            <p className={style.titleCard}>{t("shopexOffer.card1.title")}</p>
            <p className={style.textCard}>{t("shopexOffer.card1.text")}</p>
          </div>
        </div>
        <div className={style.wrapCard}>
          <div className={style.card}>
            <img className={style.image} src={image2} alt="" />
            <p className={style.titleCard}>{t("shopexOffer.card2.title")}</p>
            <p className={style.textCard}>{t("shopexOffer.card2.text")}</p>
          </div>
        </div>
        <div className={style.wrapCard}>
          <div className={style.card}>
            <img className={style.image} src={image3} alt="" />
            <p className={style.titleCard}>{t("shopexOffer.card3.title")}</p>
            <p className={style.textCard}>{t("shopexOffer.card3.text")}</p>
          </div>
        </div>
        <div className={style.wrapCard}>
          <div className={style.card}>
            <img className={style.image} src={image4} alt="" />
            <p className={style.titleCard}>{t("shopexOffer.card4.title")}</p>
            <p className={style.textCard}>{t("shopexOffer.card4.text")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ShopexOffer;