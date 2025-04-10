import check from '../../assets/shoppingCart/CartTotals/uil_check.svg';
import Header from "../HomePage/Header/Header";
import { useTranslation } from "react-i18next";
import { useSelector } from 'react-redux';
import { deleteCart, selectCarts } from '../../Store/productSlice';
import style from './HektoDemo.module.css'
import Footer from '../HomePage/Footer/Footer';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';


function HektoDemo() {
    const { t } = useTranslation();
    const carts = useSelector(selectCarts);
    const navigate = useNavigate();
const dispatch = useDispatch()
    const Subtotals = () => {
        let sum = 0;
        for (let item of carts) {
            sum += item.price * item.quantity
        }
        return sum;
    }
    return (<>
        <Header />
        <p className={style.titleHectoDemo}>{t("hektoDemo.title")}</p>
        <div className={style.wrapperHectoDemo}>

            <div className={style.containerContactInformation}>
                <p className={style.textrContactInformation}> {t("hektoDemo.ContactInformation")}</p>
                <input className={style.inputEmail} type="text" placeholder={t("hektoDemo.emailPlaceholder")} />
                <label className={style.textKeepMe}>
                    <input type="checkbox" />
                    {t("hektoDemo.keepMeUpdate")}
                </label>

                <div className={style.wrapShoppingAddress}>
                <p className={style.textShoppingAddress}>{t("hektoDemo.shippingAddress")}</p>
                    <input className={style.inputFirstName} type="text" placeholder={t("hektoDemo.firstName")} />
                    <input className={style.inputLastName} type="text" placeholder={t("hektoDemo.lastName")} />
                    <input className={style.input} type="text" placeholder={t("hektoDemo.address")} />
                    <input className={style.input} type="text" placeholder={t("hektoDemo.apartment")} />
                    <input className={style.input} type="text" placeholder={t("hektoDemo.city")} />
                    <input className={style.inputBangladesh} type="text" placeholder={t("hektoDemo.country")} />
                    <input className={style.inputCode} type="text" placeholder={t("hektoDemo.postalCode")} />
                </div>
                <button onClick={() => { navigate("/gridDefault") }} className={style.buttonContinueShopping} >{t("hektoDemo.continueShopping")}</button>
            </div>
            <div className={style.wrapProductsTotalPrice}>
                <div className={style.wrapProductShoppingCart}>
                    {carts.map((item, index) => {
                        return (<>
                            <div key={index} className={style.wrapProduct}>
                                <div className={style.wrapImageText}>
                                    <div className={style.innerImage}>
                                        <img className={style.imgProduct} src={item.img} alt="" />
                                    </div>
                                    <div className={style.innerText}>
                                        <p className={style.textProduct}>{item.title}</p>
                                        <p className={style.textColor}>{t("productShoppingCart.color")}</p>
                                    <p className={style.textSize}>{t("productShoppingCart.size")}</p>
                                    </div>
                                </div>
                                <div className={style.wrapTotal}>
                                    <p className={style.textTotal}>$ {(item.price * item.quantity).toFixed(2)}</p>
                                </div>
                            </div>
                        </>)
                    })}
                </div>

                <div className={style.wrapperCartTotals}>
                    <div className={style.innerSubtotalsCartTotals}>
                        <p className={style.textSubtotalsCartTotals}>{t("cartTotals.subtotal")}</p>
                        <p className={style.subtotalsPriceCartTotals}>$ {Subtotals().toFixed(2)}</p>
                    </div>
                    <div className={style.innerCartTotals}>
                        <p className={style.textCartTotals}>{t("cartTotals.total")}</p>
                        <p className={style.totalsPriceCartTotals}>$ {Subtotals() + 5}</p>
                    </div>
                    <div className={style.innerIconTextCartTotals}>
                        <img src={check} alt="" />
                        <p className={style.textShoppingCartTotals}>{t("cartTotals.note")}</p>
                    </div>
                    <button onClick={() => { dispatch(deleteCart());
                         navigate("/OrderCompleted")}} className={style.buttonCartTotals}>{t("cartTotals.button")}</button>
                </div>
            </div>
        </div>
        <Footer />
    </>)
}
export default HektoDemo;