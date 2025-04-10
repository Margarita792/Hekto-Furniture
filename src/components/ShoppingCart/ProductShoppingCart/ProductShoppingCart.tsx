import style from './ProductShoppingCart.module.css';
import iconDelete from '../../../assets/shoppingCart/ProductShoppingCart/Group 43.svg';
import { useSelector } from 'react-redux';
import { selectCarts, deleteProductCart, increment, decrement, setQuantity } from '../../../Store/productSlice';
import { useDispatch } from 'react-redux';
import { useTranslation } from "react-i18next";

function ProductShoppingCart() {
    const { t } = useTranslation();
    const carts = useSelector(selectCarts);
    const dispatch = useDispatch()
    const deleteProduct = (id: number) => {
        let copyCarts = carts.slice();
        const copyCartsFilter = copyCarts.filter(item => {
            return item.id !== id;
        })
        dispatch(deleteProductCart(copyCartsFilter));
    };

    return (
        <>
            <div className={style.container}>
                <div className={style.wrapper}>
                    <div className={style.wrapTitle}>
                        <p className={style.titleProduct}>{t("productShoppingCart.product")}</p>
                        <p className={style.titlePrice}>{t("productShoppingCart.price")}</p>
                        <p className={style.titleQuantity}>{t("productShoppingCart.quantity")}</p>
                        <p className={style.titleTotal}>{t("productShoppingCart.total")}</p>
                    </div>
                    {carts.map((item, index) => {
                        return (<>
                            <div key={index} className={style.wrapProduct}>
                                <div className={style.wrapImageText}>
                                    <div className={style.innerImage}>
                                        <img className={style.imgProduct} src={item.img} alt="" />
                                        <img className={style.imgDelete} src={iconDelete} alt="" onClick={() => deleteProduct(item.id)} />
                                    </div>
                                    <div className={style.innerText}>
                                        <p className={style.textProduct}>{item.title}</p>
                                        <p className={style.textColor}>{t("productShoppingCart.color")}</p>
                                        <p className={style.textSize}>{t("productShoppingCart.size")}</p>
                                    </div>
                                </div>
                                <div className={style.wrapPrice}>
                                    <p className={style.textPrice}>$ {item.price.toFixed(2)}</p>
                                </div>
                                <div className={style.wrapButton}>
                                    <button onClick={() => dispatch(decrement(item))} className={style.button}>-</button>
                                    <input value={item.quantity} onChange={(e) => dispatch(setQuantity({ id: item.id, value: e.target.value }))} className={style.input} type="number" />
                                    <button onClick={() => dispatch(increment(item))} className={style.button}>+</button>
                                </div>
                                <div className={style.wrapTotal}>
                                    <p className={style.textTotal}>$ {(item.price * item.quantity).toFixed(2)}</p>
                                </div>
                            </div>
                        </>)
                    })}
                </div>
            </div>
        </>
    )
}
export default ProductShoppingCart;