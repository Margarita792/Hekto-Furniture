
import { selectBlog, selectOfferProduct } from "../../../store/productSlice";
import { useEffect, useState } from "react";
import style from './PostSingleBlog.module.css';
import icon1 from '../../../assets/HomePage/LeatestBlog/Vector.svg';
import icon2 from '../../../assets/HomePage/LeatestBlog/Vector (1).svg';
import star from '../../../assets/SingleBlog/ant-design_star-filled.svg';
import Header from "../../HomePage/Header/Header";
import NavPage from "../../GridDefault/NavPage/NavPage";
import image1 from '../../../assets/SingleBlog/Group 92.svg';
import image2 from '../../../assets/SingleBlog/Group 140.svg';
import icon3 from '../../../assets/SingleBlog/Group 202.svg';
import icon4 from '../../../assets/SingleBlog/Group 203.svg';
import icon5 from '../../../assets/SingleBlog/Group 204.svg';
import { selectBlogComment, selectProducts } from '../../../store/productSlice'
import { TypeBlog, TypeBlogComment, typeOfferProduct, TypeProducts } from "../../../interfaces/productInterface";
import { useNavigate } from "react-router-dom";
import Artboards from "../../HomePage/Artboards/Artboards";
import Footer from "../../HomePage/Footer/Footer";
import { useForm, SubmitHandler } from 'react-hook-form';
import { addBlogComment } from "../../../store/productSlice";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../../hooks";
interface idProps {
  id: string;
}

function PostSingleBlog({ id }: idProps) {

  const {
    register,
    handleSubmit,
    formState: { }
  } = useForm<TypeBlogComment>();
  const onSubmit: SubmitHandler<TypeBlogComment> = (data) => {
    dispatch(addBlogComment(data));
  }
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const offerProduct = useAppSelector(selectOfferProduct);
  const blog = useAppSelector(selectBlog);
  const blogComment = useAppSelector(selectBlogComment);
  const [item, setItem] = useState({
    id: 0,
    img: "",
    author: "",
    date: "",
    title: "",
    description: "",
    linkReadMore: ""
  });
  useEffect(() => {
    for (let i = 0; i < blog.length; i++) {
      if (parseInt(id as string) == blog[i].id) {
        setItem(blog[i])
      }
    }
  }, [id]);
  const products = useAppSelector(selectProducts);
  const { t } = useTranslation();
  return (<>
    <Header />
    <NavPage title={t("PostSingleBlog.NavPage.title")} redText={t("PostSingleBlog.NavPage.title")} />
    <div className={style.container}>
      <div className={style.wrapBlog}>
        <div className={style.wrapCard}>
          <img className={style.image} src={item.img} alt="" />
          <div className={style.innerIconText}>
            <img className={style.icon} src={icon1} alt="" />
            <p className={style.textAuthor}>{item.author}</p>
            <img className={style.icon} src={icon2} alt="" />
            <p className={style.textDate}>{item.date}</p>
          </div>
          <p className={style.title}>{item.title}</p>
          <p className={style.description1}>{item.description}</p>
        </div>

        <p className={style.description2}>{t("PostSingleBlog.description2")}</p>
        <div className={style.innerDescription3}>
          <em className={style.description3}>{t("PostSingleBlog.description3")}</em>
        </div>
        <div className={style.innerImages}>
          <img className={style.image1} src={image1} alt="" />
          <img src={image2} alt="" />
        </div>
        <p className={style.description2}>{t("PostSingleBlog.description2")}</p>
        <div className={style.wrapCardProducts}>
          {products.slice(8, 12)
            .map((item: TypeProducts, index) => {
              return (
                <div key={index} className={style.innerCardProducts}>
                  <img className={style.imgCardProducts} src={item.img} alt="" />
                  <p className={style.titleCardProducts}>{item.title}</p>
                  <div className={style.innerPriceStars}>
                    <p className={style.priceCardProducts}>{item.price.toFixed(2)}</p>
                    <p className={style.oldPriceCardProducts}>{item.oldPrice.toFixed(2)}</p>
                    <div className={style.rowStars}>
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                    </div>
                  </div>
                </div>
              )
            })}
        </div>
        <p className={style.description2}>{t("PostSingleBlog.description2")}</p>
        <p className={style.description2}>{t("PostSingleBlog.description2")}</p>

        <div className={style.innerIconsFollow}>
          <img src={icon3} alt="" />
          <img src={icon4} alt="" />
          <img src={icon5} alt="" />
        </div>
        <div className={style.innerPreviousNextPost}>
          <p onClick={() => { navigate(`/postSingleBlog/${item.id - 1}`) }} className={style.textPreviousNextPost}>{t("PostSingleBlog.previousPost")}</p>
          <p onClick={() => { navigate(`/postSingleBlog/${item.id + 1}`) }} className={style.textPreviousNextPost}>{t("PostSingleBlog.nextPost")}</p>
        </div>

        <div className={style.wrapInput}>
          <form className={style.formInput} onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name", { required: true })} className={style.inputYourName} type="text" placeholder={t("PostSingleBlog.placeholderName")} />
            <input {...register("email", { required: true })} className={style.inputYourEmail} type="text" placeholder={t("PostSingleBlog.placeholderEmail")} />
            <input {...register("comment", { required: true })} className={style.inputYourcomment} type="text" placeholder={t("PostSingleBlog.placeholderComment")} />
            <label className={style.textCheckbox}>
              <input type="checkbox" />
              {t("PostSingleBlog.checkboxText")}
            </label>
            <input type="submit" className={style.buttonContinueShopping} value={t("PostSingleBlog.button")} />
          </form>
        </div>

        {blogComment.map((item: TypeBlogComment, index) => {
          return (
            <div key={index} className={style.wrapBlogComment}>
              <p className={style.nameBlogComment}>{item.name}</p>
              <p className={style.emailBlogComment}> {item.email}</p>
              <p className={style.commentBlogComment}>{item.comment}</p>
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

export default PostSingleBlog;