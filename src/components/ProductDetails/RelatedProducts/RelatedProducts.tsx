import style from './RelatedProducts.module.css';
import { selectProducts } from '../../../store/productSlice';
import { useSelector } from 'react-redux';
import img from '../../../assets/ProductDetails/RelatedProducts/Group 243.svg';
import { TypeProducts } from '../../../interfaces/productInterface';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

function RelatedProducts() {
    const products = useSelector(selectProducts);
    const { t } = useTranslation();
    return (<>
    <div  className={style.container}>
    <p className={style.title}>{t("RelatedProducts.title")}</p>
    <div className={style.wrapper}>
        {products
            .slice(0, 4)
            .map((item: TypeProducts, index) => {
                return (
                    
                    <Link className={style.link} to={`/singleProduct/${item.id}`}>
                       
                            <div key={index} className={style.wrapCard}>
                                <div className={style.card}>
                                    <img className={style.img} src={item.img} alt="" />
                                    <div className={style.wrapTextIcon}>
                                        <p className={style.titleProduct}>{item.title}</p>
                                        <img src={img} alt="" />
                                    </div>
                                    <p className={style.price}>$ {item.price.toFixed(2)}</p>
                                </div>
                            </div>
                        
                    </Link>
                   
                )
            })}
            </div>
             </div>
    </>)
}

export default RelatedProducts;