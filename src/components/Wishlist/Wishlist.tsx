import { useTranslation } from "react-i18next";
import Header from "../HomePage/Header/Header";
import NavPage from "../GridDefault/NavPage/NavPage";
import ProductWishlist from "./ProductWishlist";


function Wishlist() {
     const { t } = useTranslation();
    return (<>
        <Header />
        <NavPage title={t("wishlist.NavPage.title")} redText={t("wishlist.NavPage.title")} />
       <ProductWishlist/>
    </>)
}
export default Wishlist;