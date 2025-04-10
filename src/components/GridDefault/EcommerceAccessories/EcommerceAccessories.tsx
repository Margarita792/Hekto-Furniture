import { useSelector } from 'react-redux';
import { selectProducts } from '../../../Store/productSlice';
import { selectSearch } from '../../../Store/productSlice';
import { TypeProducts } from '../../../interfaces/productInterface';
import style from './EcommerceAccessories.module.css';
import { Link } from 'react-router-dom';
import { selectQtyProduct, selectChangeCard, } from "../../../Store/productSlice";
import CardProduct from '../../shopLeftSidebar/cardProduct/cardProduct';
import RowProduct from '../../shopLeftSidebar/rowProduct/rowProduct';

function EcommerceAccessories() {
     const qtyProduct = useSelector(selectQtyProduct);
     const changeCard = useSelector(selectChangeCard);
    const products = useSelector(selectProducts);
    const search = useSelector(selectSearch);
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
