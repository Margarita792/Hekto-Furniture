import style from './LatestProducts.module.css';
import cart from '../../../assets/HomePage/LatestProducts/fluent_cart-24-regular.svg';
import heart from '../../../assets/HomePage/LatestProducts/uil_heart-alt.svg';
import search from '../../../assets/HomePage/LatestProducts/uil_search-plus.svg';
import sale from '../../../assets/HomePage/LatestProducts/Group_27-removebg-preview-Photoroom.png';
import { selectProducts } from '../../../store/productSlice';
import { TypeProducts } from '../../../interfaces/productInterface';
import { Link } from 'react-router-dom';
import { addProduct } from '../../../store/productSlice';
import { useTranslation } from 'react-i18next';
import { addFavorites } from '../../../store/productSlice';
import { useAppDispatch, useAppSelector } from '../../../hooks';



function LatestProducts() {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const products = useAppSelector(selectProducts);
    return (
        <div className={style.container}>
            <p className={style.title}>{t("latestProducts.title")}</p>
            <div className={style.wrapTitle}>
                <p className={style.textRed}>{t("latestProducts.newArrival")}</p>
                <p className={style.text}>{t("latestProducts.bestSeller")}</p>
                <p className={style.text}>{t("latestProducts.featured")}</p>
                <p className={style.text}>{t("latestProducts.specialOffer")}</p>
            </div>
            <div className={style.wrapper}>
                {products.slice(4, 10)
                    .map((item: TypeProducts, index) => {
                        return (
                            <Link className={style.link} to={`/productDetails/${item.id}`}>
                            <div key={index} className={style.wrapCard}>
                                <div className={style.card}>
                                    <img className={style.sale} src={sale} alt="" />
                                    <img className={style.image} src={item.img} alt="" />
                                    <div className={style.wrapIcons}>
                                        <img onClick={(e) => {
                                            e.preventDefault(); e.stopPropagation();
                                            dispatch(addProduct(item));
                                        }} className={style.icon} src={cart} alt="" />
                                        <img onClick={(e) => {
                                             e.preventDefault(); e.stopPropagation();
                                            dispatch(addFavorites(item));
                                        }} className={style.icon} src={heart} alt="" />
                                        <img className={style.icon} src={search} alt="" />
                                    </div>
                                </div>

                                <div className={style.wrapTitlePrice}>
                                    <div className={style.wrapTitleCard}>
                                        <p className={style.textTitleProduct}>{item.title}</p>
                                    </div>
                                    <div className={style.wrapPrice}>
                                        <p className={style.textNewPrice}>${item.price.toFixed(2)}</p>
                                        <p className={style.textOldPrice}>${item.oldPrice.toFixed(2)}</p>
                                    </div>
                                </div>
                            </div>
                             </Link>
                        )
                    })}
            </div>
        </div>
    )
}
export default LatestProducts;