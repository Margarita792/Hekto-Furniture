import star from '../../../assets/ShopLeftSidebar/ant-design_star-filled.svg';
import cart from '../../../assets/ShopLeftSidebar/fluent_cart-24-regular.svg';
import heart from '../../../assets/ShopLeftSidebar/uil_heart-alt.svg';
import style from './rowProduct.module.css';
import colors from '../../../assets/ShopLeftSidebar/Group 44.svg';
import { TypeProducts } from '../../../interfaces/productInterface';
import { Link, useNavigate } from "react-router-dom";
import { addProduct } from '../../../store/productSlice';
import { addFavorites } from '../../../store/productSlice';
import { useAppDispatch } from '../../../hooks';

interface CardProductProps {
  product: TypeProducts;
}
function RowProduct({product}:CardProductProps) {
      const navigate = useNavigate();
      const dispatch = useAppDispatch();
  return (
    <div>
              <Link className={style.link} to={`/productDetails/${product.id}`} >
                <div  className={style.wrapper}>
                  <div className={style.wrapCard}>
                    <img className={style.image} src={product.img} alt="" />
                    <div className={style.wrapText}>
                      <div className={style.innerTitleIcon}>
                        <p className={style.title}>{product.title}</p>
                      </div>
                      <img src={colors} alt="" />
                      <div className={style.innerPrice}>
                        <p className={style.price}>$ {product.price.toFixed(2)}</p>
                        <p className={style.oldPrice}>$ {product.oldPrice.toFixed(2)}</p>
                      </div>

                      {Array.from<number>({ length: product.ratingProduct })
                        .map(item => {
                          return <img key={item} className={style.star} src={star} alt="" />
                        })}
                      <p className={style.description}>{product.description}</p>
                      <div className={style.innerIcons}>
                        <img onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          dispatch(addProduct(product));
                          navigate("/shoppingCart")
                        }} src={cart} alt="" />
                        <img onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          dispatch(addFavorites(product));
                          navigate("/wishlist")
                        }} src={heart} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
    </div>
  )
}

export default RowProduct;