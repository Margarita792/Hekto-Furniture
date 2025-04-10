import { useTranslation } from "react-i18next";
import Artboards from "../HomePage/Artboards/Artboards";
import Foooter from "../HomePage/Footer/Footer";
import Header from "../HomePage/Header/Header";
import EcommerceAccessories from "./EcommerceAccessories/EcommerceAccessories";
import NavPage from "./NavPage/NavPage";
import SortAside from "./SortAside/SortAside";


function GridDefault() {
    const {t}= useTranslation()
    return (<>
        <Header />
        <NavPage title={t("NavPage.GridDefault.title")} redText={t("NavPage.GridDefault.title")} />
        <SortAside/>
        <EcommerceAccessories/>
        <Artboards/>
        <Foooter/>
    </>)
}
export default GridDefault;