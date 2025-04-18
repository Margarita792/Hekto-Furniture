import { selectFavorites, deleteProductWishlist } from "../../store/productSlice";
import iconDelete from '../../assets/shoppingCart/ProductShoppingCart/Group 43.svg';
import { addProduct } from '../../store/productSlice';
import { useTranslation } from "react-i18next";
import style from './ProductWishlist.module.css';
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks";

function ProductWishlist() {
    const { t } = useTranslation();
    const favorites = useAppSelector(selectFavorites);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const deleteWishlist = (id: number) => {
        let copyFavorites = favorites.slice();
        const copyFavoritesFilter = copyFavorites.filter(item => {
            return item.id !== id;
        })
        dispatch(deleteProductWishlist(copyFavoritesFilter));
    };
    return (<>
        <div className={style.container}>
            <div className={style.wrapper}>
                <div className={style.wrapTitle}>
                    <p className={style.titleProduct}>{t("wishlist.product")}</p>
                    <p className={style.titlePrice}>{t("wishlist.price")}</p>
                </div>
                {favorites.map((item, index) => {
                    return (<>
                        <div key={index} className={style.wrapProductWishlist}>
                            <div className={style.wrapImageText}>
                                <div className={style.innerImage}>
                                    <img className={style.imgProduct} src={item.img} alt="" />
                                    <img className={style.imgDelete} src={iconDelete} alt="" onClick={() => deleteWishlist(item.id)} />
                                </div>
                                <div className={style.innerText}>
                                    <p className={style.textProduct}>{item.title}</p>
                                    <p className={style.textColor}> {t("wishlist.color")}: Brown </p>
                                    <p className={style.textSize}> {t("wishlist.size")}: XL </p>
                                </div>
                            </div>
                            <div className={style.wrapPrice}>
                                <p className={style.textPrice}>$ {item.price.toFixed(2)}</p>
                            </div>
                            <button
                                className={style.buttonAddCart}
                                onClick={() => { dispatch(addProduct(item)); navigate("/shoppingCart") }} >{t("wishlist.addToCart")} </button>
                        </div>
                    </>)
                })}
            </div>
        </div>
    </>)
}

export default ProductWishlist;