import NavPage from "../GridDefault/NavPage/NavPage";
import Header from "../HomePage/Header/Header";
import CartTotals from "./CartTotals/CartTotals";
import ProductShoppingCart from "./ProductShoppingCart/ProductShoppingCart";
import style from './ShoppingCart.module.css';
import { useTranslation } from "react-i18next";

function ShoppingCart() {
  const {t}=useTranslation();
  return (<>
    <Header/>
    <NavPage title={t("shoppingCart.title")}  redText={t("shoppingCart.title")} />
    <div className={style.wrap}>
    <ProductShoppingCart/>
    <CartTotals/>
    </div>
    </> )
}

export default ShoppingCart;
