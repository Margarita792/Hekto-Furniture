import style from './Header.module.css';
import icon1 from '../../../assets/HomePage/Header/Vector.svg';
import icon2 from '../../../assets/HomePage/Header/bx_bx-phone-call.svg';
import icon3 from '../../../assets/HomePage/Header/uil_heart-alt.svg';
import icon4 from '../../../assets/HomePage/Header/carbon_user.svg';
import cart from '../../../assets/HomePage/Header/fluent_cart-24-regular.svg';
import icon6 from '../../../assets/HomePage/Header/Hekto.svg';
import icon7 from '../../../assets/HomePage/Header/uil_search.svg';
import { Link, useNavigate } from 'react-router-dom';
import { selectCarts } from '../../../store/productSlice';
import { selectFavorites } from "../../../store/productSlice";
import { useTranslation } from 'react-i18next';
import { searchTitle } from '../../../store/productSlice';
import { selectSearch } from '../../../store/productSlice';
import { useAppDispatch, useAppSelector } from '../../../hooks';

function Header() {
    const carts = useAppSelector(selectCarts);
    const search = useAppSelector(selectSearch);
    const favorites = useAppSelector(selectFavorites);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();
    return (<>
        <div className={style.container1}>
            <div className={style.wrapLeft}>
                <div className={style.wrapMail}>
                    <img className={style.icon} src={icon1} alt="" />
                    <p className={style.text}>mhhasanul@gmail.com</p>
                </div>
                <div className={style.wrap}>
                    <img className={style.icon} src={icon2} alt="" />
                    <p className={style.text}>&#40;12345&#41;67890</p>
                </div>
            </div>
            <div className={style.wrapRight}>
                <div className={style.wrapSelect}>
                    <select className={style.select} onChange={(e) => i18n.changeLanguage(e.target.value)} defaultValue={i18n.language}>
                        <option value="en">English</option>
                        <option value="uk">Ukrainian</option>
                    </select>
                    <select className={style.select} >
                        <option >USD</option>
                        <option >UAH</option>
                    </select>
                </div>
                <Link className={style.link} to="/wishlist">
                    <div className={style.wrap}>
                        <p className={style.text}>{t("header.text1")}</p>

                        <img className={style.icon} src={icon3} alt="" />
                        <div className={style.wrapCounterShoppingCar}>
                            <p className={style.counterFavorites}>{favorites.length}</p>
                        </div>
                    </div>
                </Link>
                <Link className={style.link} to="/account">
                    <div className={style.wrap}>
                        <p className={style.text}>{t("header.text2")}</p>
                        <img className={style.icon} src={icon4} alt="" />
                    </div>
                </Link>
                <Link className={style.link} to="/shoppingCart">
                    <div className={style.wrap}>
                        <img className={style.iconCart} src={cart} alt="" />
                        <div className={style.wrapCounterShoppingCart}>
                            <p className={style.counterShoppingCart}>{carts.length}</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>

        <div className={style.container2}>
            <div className={style.wrapper}>
                <div className={style.wrapCenter}>
                    <Link to="/">
                        <img className={style.iconLogo} src={icon6} alt="" />
                    </Link>
                    <div className={style.wrapText}>
                        <Link to="/" className={style.link}>
                            <p className={style.selectHome}>{t("header.option")}</p>
                        </Link>
                        <p className={style.textPages}>{t("header.textPages")}</p>
                        <Link className={style.link} to="/gridDefault">
                            <p className={style.textProducts}> {t("header.textProducts")}</p>
                        </Link>
                        <Link className={style.link} to="/blogPage">
                        <p className={style.textBlog}> {t("header.textBlog")}</p>
                        </Link>
                        <Link className={style.link} to="/shopLeftSidebar">
                            <p className={style.textShop}>{t("header.textShop")}</p>
                        </Link>
                        <Link className={style.link} to="/contactUs">
                        <p className={style.textContact}>{t("header.textContact")}</p>
                        </Link>
                    </div>
                </div>
                <div className={style.wrap}>
                    <input value={search} onChange={(e) => { dispatch(searchTitle({ value: e.target.value })) }} className={style.input} type="text" />
                    <div className={style.wrapIconSearch}>
                        <img onClick={() => {
                            if (search) {
                                navigate("/gridDefault");
                            }
                        }} src={icon7} alt="" />
                    </div>
                </div>
                <div>
                </div>
            </div>
        </div>
    </>
    )
}
export default Header;