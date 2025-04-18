import { selectProducts } from '../../../store/productSlice';
import { selectSearch } from '../../../store/productSlice';
import { TypeProducts } from '../../../interfaces/productInterface';
import style from './EcommerceAccessories.module.css';
import { Link } from 'react-router-dom';
import { selectQtyProduct, selectChangeCard, } from "../../../store/productSlice";
import CardProduct from '../../shopLeftSidebar/cardProduct/cardProduct';
import RowProduct from '../../shopLeftSidebar/rowProduct/rowProduct';
import { useAppSelector } from '../../../hooks';

function EcommerceAccessories() {
     const qtyProduct = useAppSelector(selectQtyProduct);
     const changeCard = useAppSelector(selectChangeCard);
    const products = useAppSelector(selectProducts);
    const search = useAppSelector(selectSearch);
    return (<>
        <div className={style.wrapper}>
            {products.filter((item: TypeProducts) => {
                return item.title.includes(search)
            })
                .slice(0, qtyProduct)
                .map((item: TypeProducts) => {
                    return (
                        <Link className={style.link} to={`/productDetails/${item.id}`}>
                             {changeCard === "card" ? <CardProduct  product={item}/> : <RowProduct product={item}/>}
                        </Link>
                    )
                })}
        </div>
    </>)
}
export default EcommerceAccessories;
