import style from './TopCategories.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { selectProducts } from '../../../store/productSlice';
import { TypeProducts } from '../../../interfaces/productInterface';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../../../hooks';


function TopCategories() {
    const { t } = useTranslation();
    const products = useAppSelector(selectProducts);
    return (<>
        <p className={style.titleContainer}>{t("TopCategories.title")}</p>
        <Swiper
            pagination={{
                dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="SlideTopCategories"
        >
            <SwiperSlide>
          
                <div className={style.container}>
                  
                    <div className={style.wrapper}>
                        {products.slice(0, 4)
                            .map((item: TypeProducts, index) => {
                                return (
                                    <Link className={style.link} to={`/productDetails/${item.id}`}>
                                        <div key={index} className={style.wrapCard}>
                                            <div className={style.innerImage}>
                                                <img className={style.image} src={item.img} alt="" />
                                            </div>
                                            <div className={style.innerText}>
                                                <p className={style.titleInnerText}>{item.title}</p>
                                                <p className={style.priceInnerText}>${item.price.toFixed(2)}</p>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })}
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className={style.container}>
                    <div className={style.wrapper}>

                        {products.slice(0, 4)
                            .map((item: TypeProducts, index) => {
                                return (
                                    <Link className={style.link} to={`/productDetails/${item.id}`}>
                                        <div key={index} className={style.wrapCard}>
                                            <div className={style.innerImage}>
                                                <img className={style.image} src={item.img} alt="" />
                                            </div>
                                            <div className={style.innerText}>
                                                <p className={style.titleInnerText}>{item.title}</p>
                                                <p className={style.priceInnerText}>${item.price.toFixed(2)}</p>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })}

                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className={style.container}>
                    <div className={style.wrapper}>
                        {products.slice(0, 4)
                            .map((item: TypeProducts, index) => {
                                return (
                                    <Link className={style.link} to={`/productDetails/${item.id}`}>
                                        <div key={index} className={style.wrapCard}>
                                            <div className={style.innerImage}>
                                                <img className={style.image} src={item.img} alt="" />
                                            </div>
                                            <div className={style.innerText}>
                                                <p className={style.titleInnerText}>{item.title}</p>
                                                <p className={style.priceInnerText}>${item.price.toFixed(2)}</p>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })}

                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
        </> )
}
export default TopCategories;