import style from './FeaturedProducts.module.css';
import color from '../../../assets/HomePage/FeaturedProducts/Group 141.svg';
import cart from '../../../assets/HomePage/FeaturedProducts/fluent_cart-24-regular.svg';
import heart from '../../../assets/HomePage/FeaturedProducts/uil_heart-alt.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { useSelector } from 'react-redux';
import { selectProducts } from '../../../Store/productSlice';
import { TypeProducts } from '../../../interfaces/productInterface';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../../Store/productSlice';
import { useTranslation } from 'react-i18next';
import { addFavorites } from '../../../Store/productSlice';

function FeaturedProducts() {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const products = useSelector(selectProducts);
    return (<>
        <div className={style.container}>
            <p className={style.title}>{t("featuredProducts.title")}</p>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="features"
            >
                <SwiperSlide>
                    <div className={style.wrapper}>
                        {products.slice(0, 4)
                            .map((item: TypeProducts, index) => {
                                return (
                                    <div key={index} className={style.card}>
                                        <div className={style.wrapIcon}>
                                            <div className={style.wrapIcons}>
                                                <img onClick={(e) => {
                                                    e.preventDefault(); e.stopPropagation();
                                                    dispatch(addProduct(item));
                                                    navigate("/shoppingCart")
                                                }} className={style.icon6} src={cart} alt="" />
                                                <img onClick={(e) => {
                                                    e.preventDefault(); e.stopPropagation();
                                                    dispatch(addFavorites(item));
                                                    navigate("/wishlist")
                                                }} className={style.icon6} src={heart} alt="" />
                                            </div>
                                            <img className={style.icon} src={item.img} alt="" />
                                            <Link className={style.link} to={`/productDetails/${item.id}`}>
                                                <div className={style.wrapButtonViewDetails}>
                                                    <button className={style.button}>View Details</button>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className={style.wrapText}>
                                            <p className={style.titleProduct}>{item.title}</p>
                                            <img className={style.colorProduct} src={color} alt="" />
                                            <p className={style.codeProduct}>Code -{item.code}</p>
                                            <p className={style.priceProduct}>$ {item.price.toFixed(2)}</p>
                                        </div>
                                    </div>
                                )
                            }
                            )
                        }
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={style.wrapper}>
                        {products.slice(4, 8)
                            .map((item: TypeProducts, index) => {
                                return (
                                    <div key={index} className={style.card}>
                                        <div className={style.wrapIcon}>
                                            <div className={style.wrapIcons}>
                                                <img onClick={(e) => {
                                                    e.preventDefault(); e.stopPropagation();
                                                    dispatch(addProduct(item));
                                                    navigate("/shoppingCart")
                                                }} className={style.icon6} src={cart} alt="" />
                                                <img onClick={(e) => {  e.preventDefault();  e.stopPropagation();
                                                    dispatch(addFavorites(item));
                                                    navigate("/wishlist")
                                                }} className={style.icon6} src={heart} alt="" />
                                            </div>
                                            <img className={style.icon} src={item.img} alt="" />
                                            <Link className={style.link} to={`/productDetails/${item.id}`}>
                                                <div className={style.wrapButtonViewDetailsSlide2}>
                                                    <button className={style.button}>View Details</button>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className={style.wrapText}>
                                            <p className={style.titleProduct}>{item.title}</p>
                                            <img className={style.colorProduct} src={color} alt="" />
                                            <p className={style.codeProduct}>Code -{item.code}</p>
                                            <p className={style.priceProduct}>$ {item.price.toFixed(2)}</p>
                                        </div>
                                    </div>

                                )
                            }
                            )
                        }
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={style.wrapper}>
                        {products.slice(0, 4)
                            .map((item: TypeProducts, index) => {
                                return (

                                    <div key={index} className={style.card}>
                                        <div className={style.wrapIcon}>
                                            <div className={style.wrapIcons}>
                                                <img onClick={(e) => {
                                                    e.preventDefault(); e.stopPropagation();
                                                    dispatch(addProduct(item));
                                                    navigate("/shoppingCart")
                                                }} className={style.icon6} src={cart} alt="" />
                                                <img onClick={(e) => {
                                                    e.preventDefault();
                                                    e.stopPropagation();
                                                    dispatch(addFavorites(item));
                                                    navigate("/wishlist")
                                                }} className={style.icon6} src={heart} alt="" />
                                            </div>
                                            <img className={style.icon} src={item.img} alt="" />
                                            <div className={style.wrapButtonViewDetailsSlide3}>
                                                <Link className={style.link} to={`/productDetails/${item.id}`}>
                                                    <button className={style.button} >View Details</button>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className={style.wrapText}>
                                            <p className={style.titleProduct}>{item.title}</p>
                                            <img className={style.colorProduct} src={color} alt="" />
                                            <p className={style.codeProduct}>Code -{item.code}</p>
                                            <p className={style.priceProduct}>$ {item.price.toFixed(2)}</p>
                                        </div>
                                    </div>
                                )
                            }
                            )
                        }
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </>)
}
export default FeaturedProducts;