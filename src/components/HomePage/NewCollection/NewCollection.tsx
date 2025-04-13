import style from './NewCollection.module.css';
import lamp from '../../../assets/HomePage/NewCollection/image Lamp.svg';
import ellipse from '../../../assets/HomePage/NewCollection/Ellipse 60.svg';
import icon3 from '../../../assets/HomePage/NewCollection/Shell-Shaped-Armchair-Pink-Velvet-Fabric-One-Seater-Sofa-for-Living-Room 1.svg';
import discount from '../../../assets/HomePage/NewCollection/Vector 14.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';

function NewCollection() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <>
      <Swiper pagination={{ dynamicBullets: true }} modules={[Pagination]} className="header">
        <SwiperSlide >
          <div className={style.container}>
            <img className={style.lamp} src={lamp} alt="" />
            <div className={style.wrap}>
              <div className={style.innerText}>
                <p className={style.textBestFurniture}>{t("newCollection.bestFurniture")}</p>
                <p className={style.textNewFurniture}>{t("newCollection.title1")}</p>
                <p className={style.textLoremIpsum}>{t("newCollection.description")}</p>
                <button className={style.button} onClick={()=>{navigate("/gridDefault")}}>{t("newCollection.shopNow")}</button>
              </div>
            </div>
            <div className={style.wrapEllipse}>
              <img className={style.ellipse1} src={ellipse} alt="" />
              <img className={style.ellipse2} src={ellipse} alt="" />
              <img className={style.chair} src={icon3} alt="" />
              <div className={style.circleDiscount}>
                <img className={style.discount} src={discount} alt="" />
                <p className={style.textDiscount}>{t("newCollection.discount")}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={style.containerSlider2}>
            <img className={style.lamp} src={lamp} alt="" />
            <div className={style.wrap}>
              <div className={style.innerText}>
                <p className={style.textBestFurniture}>{t("newCollection.bestFurniture")}</p>
                <p className={style.textNewFurniture}>{t("newCollection.title2")}</p>
                <p className={style.textLoremIpsum}>{t("newCollection.description")}</p>
                <button className={style.button}>{t("newCollection.shopNow")}</button>
              </div>
            </div>
            <div className={style.wrapEllipse}>
              <img className={style.ellipse1} src={ellipse} alt="" />
              <img className={style.ellipse2} src={ellipse} alt="" />
              <img className={style.chair} src={icon3} alt="" />
              <div className={style.circleDiscount}>
                <img className={style.discount} src={discount} alt="" />
                <p className={style.textDiscount}>{t("newCollection.discount")}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={style.container}>
            <img className={style.lamp} src={lamp} alt="" />
            <div className={style.wrap}>
              <div className={style.innerText}>
                <p className={style.textBestFurniture}>{t("newCollection.bestFurniture")}</p>
                <p className={style.textNewFurniture}>{t("newCollection.title3")}</p>
                <p className={style.textLoremIpsum}>{t("newCollection.description")}</p>
                <button className={style.button}>{t("newCollection.shopNow")}</button>
              </div>
            </div>
            <div className={style.wrapEllipse}>
              <img className={style.ellipse1} src={ellipse} alt="" />
              <img className={style.ellipse2} src={ellipse} alt="" />
              <img className={style.chair} src={icon3} alt="" />
              <div className={style.circleDiscount}>
                <img className={style.discount} src={discount} alt="" />
                <p className={style.textDiscount}>{t("newCollection.discount")}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
export default NewCollection;
