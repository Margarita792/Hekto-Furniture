import style from './CartTotals.module.css';
import check from '../../../assets/shoppingCart/CartTotals/uil_check.svg';
import { selectCarts } from '../../../Store/productSlice';
import { useSelector } from 'react-redux';
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';

function CartTotals() {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const carts = useSelector(selectCarts);
    const Subtotals = () => {
        let sum=0;
        for (let item of carts) {
            sum += item.price * item.quantity
        }
        return sum;
    }
    return (
        <div className={style.container}>
            <p className={style.titleContainer}>{t("cartTotals.title")}</p>
            <div className={style.wrapperCartTotals}>
                <div className={style.innerSubtotalsCartTotals}>
                <p className={style.textSubtotalsCartTotals}>{t("cartTotals.subtotal")}</p>
                    <p className={style.subtotalsPriceCartTotals}>$ {Subtotals().toFixed(2)}</p>
                </div>
                <div className={style.innerCartTotals}>
                <p className={style.textCartTotals}>{t("cartTotals.total")}</p>
                    <p className={style.totalsPriceCartTotals}>$ {Subtotals()+5}</p>
                </div>
                <div className={style.innerIconTextCartTotals}>
                    <img src={check} alt="" />
                    <p className={style.textShoppingCartTotals}>{t("cartTotals.note")}</p>
                </div>
                <button onClick={()=>{navigate("/hektoDemo")}} className={style.buttonCartTotals}>{t("cartTotals.button")}</button>
            </div>
        </div>
    )
}
export default CartTotals;