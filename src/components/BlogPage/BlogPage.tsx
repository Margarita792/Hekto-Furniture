import { useTranslation } from "react-i18next";
import NavPage from "../GridDefault/NavPage/NavPage";
import Header from "../HomePage/Header/Header";
import style from './BlogPage.module.css';
import icon1 from '../../assets/HomePage/LeatestBlog/Vector.svg';
import icon2 from '../../assets/HomePage/LeatestBlog/Vector (1).svg';
import { useSelector } from "react-redux";
import { selectBlog, selectOfferProduct } from "../../Store/productSlice";
import { TypeBlog, typeOfferProduct } from "../../interfaces/productInterface";
import { useNavigate } from "react-router-dom";
import icon3 from '../../assets/BlogPage/Group 202.svg';
import icon4 from '../../assets/BlogPage/Group 203.svg';
import icon5 from '../../assets/BlogPage/Group 204.svg';
import Artboards from "../HomePage/Artboards/Artboards";
import Footer from "../HomePage/Footer/Footer";
function BlogPage() {
    const offerProduct = useSelector(selectOfferProduct);
    const navigate = useNavigate();
    const blog = useSelector(selectBlog);
    const { t } = useTranslation();

    return (<>
        <Header />
        <NavPage title={t("BlogPage.NavPage.title")} redText={t("BlogPage.NavPage.title")} />
        <div className={style.container}>
            <div className={style.sectionBlog}>
                {blog.slice(3, 6)
                    .map((item: TypeBlog, index) => {
                        return (
                            <div key={index} className={style.wrapCard}>
                                <img className={style.image} src={item.img} alt="" />
                                <div className={style.innerIconText}>
                                    <img className={style.icon} src={icon1} alt="" />
                                    <p className={style.textAuthor}>{item.author}</p>
                                    <img className={style.icon} src={icon2} alt="" />
                                    <p className={style.textDate}>{item.date}</p>
                                </div>
                                <p className={style.title}>{item.title}</p>
                                <p className={style.description}>{item.description}</p>
                                <p onClick={() => navigate(`/postSingleBlog/${item.id}`)} className={style.textLink}>{item.linkReadMore}</p>
                            </div>

                        )
                    })}
            </div>
            <div className={style.filterAside}>
                <div className={style.innerSearch}>
                    <p className={style.textSearch}>{t("BlogPage.search")}</p>
                    <input className={style.inputSearch} type="text" placeholder={t("BlogPage.searchPlaceholder")} />
                </div>
                <p className={style.titleCategories}>{t("BlogPage.categories")}</p>
                <div className={style.innerCategories}>
                    <p className={style.textCategories}>{t("BlogPage.categoryHobbies")}</p>
                    <p className={style.textCategories}>{t("BlogPage.categoryWomen")}</p>
                    <p className={style.textCategories}>{t("BlogPage.categoryWomen")}</p>
                    <p className={style.textCategories}>{t("BlogPage.categoryWomen")}</p>
                    <p className={style.textCategories}>{t("BlogPage.categoryWomen")}</p>
                    <p className={style.textCategories}>{t("BlogPage.categoryWomen")}</p>
                </div>
                <p className={style.textRecentPost}>{t("BlogPage.recentPost")}</p>
                {blog.slice(0, 4)
                    .map((item: TypeBlog, index) => {
                        return (
                            <div key={index} className={style.innerRecentPost}>
                                <img className={style.imgRecentPost} src={item.img} alt="" />
                                <div>
                                    <p className={style.titleRecentPost}>{item.title}</p>
                                    <p className={style.dateRecentPost}>{item.date}</p>
                                </div>
                            </div>
                        )
                    })}
                <p className={style.textSaleProduct}>{t("BlogPage.saleProduct")}</p>
                {blog.slice(3, 6)
                    .map((item: TypeBlog, index) => {
                        return (
                            <div key={index} className={style.innerRecentPost}>
                                <img className={style.imgRecentPost} src={item.img} alt="" />
                                <div>
                                    <p className={style.titleRecentPost}>{item.title}</p>
                                    <p className={style.dateRecentPost}>{item.date}</p>
                                </div>
                            </div>
                        )
                    })}
                <p className={style.textOfferProduct}>{t("BlogPage.offerProduct")}</p>
                <div className={style.wrapOfferProduct}>
                    {offerProduct.slice(0, 4)
                        .map((item: typeOfferProduct, index) => {
                            return (
                                <div key={index} className={style.innerOfferProduct}>
                                    <img className={style.imageOfferProduct} src={item.img} alt="" />
                                    <p className={style.titleOfferProduct}>{item.title}</p>
                                    <p className={style.priceOfferProduct}>$ {item.minPrice} - ${item.maxPrice}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <p className={style.textFollow}>{t("BlogPage.follow")}</p>
                <div className={style.innerIconsFollow}>
                    <img src={icon3} alt="" />
                    <img src={icon4} alt="" />
                    <img src={icon5} alt="" />
                </div>
                <p className={style.textTags}>{t("BlogPage.tags")}</p>
                <div className={style.innerTags}>
                    <p className={style.textInnerTags}>{t("BlogPage.tagGeneral")}</p>
                    <p className={style.textInnerTags}>{t("BlogPage.tagAtsanil")}</p>
                    <p className={style.textInnerTags}>{t("BlogPage.tagInsas")}</p>
                    <p className={style.textInnerTags}>{t("BlogPage.tagBibsaas")}</p>
                    <p className={style.textInnerTags}>{t("BlogPage.tagNulla")}</p>
                </div>
            </div>
        </div>
        <Artboards />
        <Footer />
    </>)
}
export default BlogPage;