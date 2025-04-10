import NavPage from "../GridDefault/NavPage/NavPage";
import Header from "../HomePage/Header/Header";
import SingleProduct from "./SingleProduct/SingleProduct";
import style from './ProductDetails.module.css';
import img from '../../assets/ProductDetails/akar-icons_arrow-up.svg';
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import Artboards from "../HomePage/Artboards/Artboards";
import Foooter from "../HomePage/Footer/Footer";
import { useParams } from 'react-router-dom';
import { useTranslation } from "react-i18next";


function ProductDetails() {
    const { t } = useTranslation();
    const { id } = useParams();
    return (<>
        <Header />
        <NavPage title={t("NavPage.ProductDetailst.title")} redText={t("NavPage.ProductDetailst.title")} />
        <SingleProduct id={id as string} />
        <div className={style.container}>
            <div className={style.wrapper}>
                <div className={style.wrapTitle}>
                    <p className={style.textTitleDescription}>{t("productDetails.descriptionTab")}</p>
                    <p className={style.textTitle}>{t("productDetails.additionalInfoTab")}</p>
                    <p className={style.textTitle}>{t("productDetails.reviewsTab")}</p>
                    <p className={style.textTitle}>{t("productDetails.videoTab")}</p>
                </div>
                <div className={style.wrapText}>
                <p className={style.textTitleVarius}>{t("productDetails.variusTitle")}</p>
                <p className={style.text}>{t("productDetails.variusText")}</p>
                </div>
                <div className={style.wrapText}>
                <p className={style.textTitleMoredetails}>{t("productDetails.moreDetails")}</p>
                    <div  className={style.wrapIconText}>
                        <img className={style.img} src={img} alt="" />
                        <p className={style.text}>{t("productDetails.detailText")}</p>
                    </div>
                    <div className={style.wrapIconText}>
                        <img className={style.img} src={img} alt="" />
                        <p className={style.text}>{t("productDetails.detailText")}</p>
                    </div>
                    <div className={style.wrapIconText}>
                        <img className={style.img} src={img} alt="" />
                        <p className={style.text}>{t("productDetails.detailText")}</p>
                    </div>
                    <div className={style.wrapIconText}>
                        <img className={style.img} src={img} alt="" />
                        <p className={style.text}>{t("productDetails.detailText")}.</p>
                    </div>
                </div>
            </div>
        </div>
        <RelatedProducts />
        <Artboards />
        <Foooter />
    </>)
}
export default ProductDetails;