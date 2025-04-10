import img1 from '../../../assets/ProductDetails/SingleProduct/Rectangle 134.svg';
import img2 from '../../../assets/ProductDetails/SingleProduct/Rectangle 136.svg';
import img3 from '../../../assets/ProductDetails/SingleProduct/Rectangle 137.svg';
import heart from '../../../assets/ProductDetails/SingleProduct/uil_heart-alt.svg';
import icons from '../../../assets/ProductDetails/SingleProduct/Group 205.svg';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TypeProducts } from '../../../interfaces/productInterface';
import style from './SingleProduct.module.css'
import { useEffect, useState } from 'react';
import { selectProducts } from '../../../Store/productSlice';
import { useDispatch } from 'react-redux';
import { addProduct, addFavorites } from '../../../Store/productSlice';
import { useTranslation } from 'react-i18next';

interface idProps {
    id: string;
}
function SingleProduct({ id }: idProps) {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const products = useSelector(selectProducts);
    const [item, setItem] = useState<TypeProducts>({
        id: 0,
        img: '',
        title: '',
        description: '',
        code: '',
        price: 0,
        oldPrice: 0,
        ratingProduct: 0,
    })

    useEffect(() => {
        for (let i = 0; i < products.length; i++) {
            if (products[i].id == parseInt(id as string)) {
                setItem(products[i])
            }
        }
    }, [id]);

    return (<>
        <div className={style.container}>
            <div className={style.wrapSingleProduct}>
                <div className={style.imgSection}>
                    <div className={style.imgColumn}>
                        <img className={style.sideImg} src={img1} alt="" />
                        <img className={style.sideImg} src={img2} alt="" />
                        <img className={style.sideImg} src={img3} alt="" />
                    </div >
                    <div className={style.innerBigImg}>
                        <img className={style.bigImg} src={item.img} alt="" />
                    </div>
                </div>
                <div className={style.textSection}>
                    <p className={style.textTitle}>{item.title}</p>
                    <div className={style.wrapStars}>
                        <p className={style.textСomments}>(22)</p>
                    </div>
                    <div className={style.wrapPrice}>
                        <p className={style.newPrice}>$ {item.price}</p>
                        <p className={style.oldPrice}>$ {item.oldPrice}</p>
                    </div>
                    <p className={style.textColor}>{t("SingleProduct.textColor")} </p>
                    <p className={style.textLorem}>{t("SingleProduct.textLoremIpsum")}</p>
                    <div className={style.innerAddToCart}>
                        <p onClick={() => {
                            dispatch(addProduct(item));
                            navigate("/shoppingCart")
                        }} className={style.textAddToCart}>{t("SingleProduct.textAddToCart")}</p>
                        <img onClick={() => {
                            dispatch(addFavorites(item));
                            navigate("/wishlist")
                        }} src={heart} alt="" />
                    </div>
                    <p className={style.textCategories}>{t("SingleProduct.textCategories")}</p>
                    <p className={style.textTags}>{t("SingleProduct.textTags")} </p>
                    <div className={style.wrapTextIcons}>
                        <p className={style.textShare}>{t("SingleProduct.textShare")} </p>
                        <img src={icons} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default SingleProduct;