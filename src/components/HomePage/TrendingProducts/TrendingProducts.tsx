import style from './TrendingProducts.module.css';
import image5 from '../../../assets/HomePage/TrendingProducts/image 1162.svg';
import image6 from '../../../assets/HomePage/TrendingProducts/image 1161.svg';
import image7 from '../../../assets/HomePage/TrendingProducts/image 30.svg';
import image8 from '../../../assets/HomePage/TrendingProducts/image 19.svg';
import image9 from '../../../assets/HomePage/TrendingProducts/image 28.svg';
import { selectProducts } from '../../../store/productSlice';
import { TypeProducts } from '../../../interfaces/productInterface';
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../hooks';

function TrendingProducts() {
    const products = useAppSelector(selectProducts);
    const { t } = useTranslation();
    const isPhone = ()=> window.matchMedia("(max-width:480px)").matches;
    return (
        <>
        <div className={style.container}>
        <p className={style.titleContainer}>{t("trendingProducts.title")}</p>
            <div  className={style.wrapper}>
            {products.slice(3,isPhone()?7:10)
            .map((item: TypeProducts, index) => {
                return (
                    <Link className={style.link} to={`/productDetails/${item.id}`}>
                <div key={index} className={style.wrapCard}>
                    <div className={style.innerImage}>
                        <img className={style.image} src={item.img} alt="" />
                    </div>
                    <div className={style.innerText}>
                        <p className={style.textInnerText}>{item.title} </p>
                        <div className={style.innerPrice}>
                            <p className={style.newPrice}>${item.price.toFixed(2)}</p>
                            <p className={style.oldPrice}>${item.oldPrice.toFixed(2)} </p>
                        </div>
                    </div>
                </div>
                </Link>
        )})}
        </div>
            </div>
            <div className={style.discountSection}>
                <div className={style.wrapDiscountClock}>
                <p className={style.title}>{t("trendingProducts.discount1Title")}</p>
                <p className={style.text}>{t("trendingProducts.discount1Action")}</p>
                    <img className={style.clock} src={image5} alt="" />
                </div>
                    <div className={style.wrapDiscountShelf}>
                    <p className={style.title}>{t("trendingProducts.discount2Title")}</p>
                    <p className={style.text}>{t("trendingProducts.discount2Action")}</p>
                        <img className={style.shelf} src={image6} alt="" />
                    </div>
                <div className={style.wrapDiscountCard}>
                    <div className={style.innerDiscountCard}>
                        <div className={style.innerImageDiscount}>
                            <img className={style.imageDiscount} src={image7} alt="" />
                        </div>
                        <div className={style.innerTextPrice}>
                        <p className={style.textDiscount}>{t("trendingProducts.cardTitle")}</p>
                            <p className={style.textOldPrice}>$32.00</p>
                        </div>
                    </div>
                    <div className={style.innerDiscountCard}>
                        <div className={style.innerImageDiscount}>
                            <img className={style.imageDiscount} src={image8} alt="" />
                        </div>
                        <div className={style.innerTextPrice}>
                        <p className={style.textDiscount}>{t("trendingProducts.cardTitle")}</p>
                            <p className={style.textOldPrice}>$32.00</p>
                        </div>
                    </div>
                    <div className={style.innerDiscountCard}>
                        <div className={style.innerImageDiscount}>
                            <img className={style.imageDiscount} src={image9} alt="" />
                        </div>
                        <div className={style.innerTextPrice}>
                        <p className={style.textDiscount}>{t("trendingProducts.cardTitle")}</p>
                            <p className={style.textOldPrice}>$32.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default TrendingProducts;