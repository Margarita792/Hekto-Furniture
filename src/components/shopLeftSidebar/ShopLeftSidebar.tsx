import NavPage from "../GridDefault/NavPage/NavPage";
import SortAside from "../GridDefault/SortAside/SortAside";
import Header from "../HomePage/Header/Header";
import style from './shopLeftSidebar.module.css';
import goldStar from '../../assets/ShopLeftSidebar/ant-design_star-filled.svg';
import grayStar from '../../assets/ShopLeftSidebar/ant-design_star-filled (1).svg';
import searchInput from '../../assets/ShopLeftSidebar/uil_search.svg';
import CardProduct from "./cardProduct/cardProduct";
import RowProduct from "./rowProduct/rowProduct";
import Artboards from "../HomePage/Artboards/Artboards";
import Footer from "../HomePage/Footer/Footer";
import { selectChangeCard, selectProducts } from '../../Store/productSlice';
import { useSelector } from "react-redux";
import { selectSearch } from '../../Store/productSlice';
import { selectMinPrice } from '../../Store/productSlice';
import { selectMaxPrice } from '../../Store/productSlice';
import { selectRating } from '../../Store/productSlice';
import { TypeProducts } from '../../interfaces/productInterface';
import { searchMinPrice, searchMaxPrice, ratingChecked } from '../../Store/productSlice'
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { selectQtyProduct } from "../../Store/productSlice";

function ShopLeftSidebar() {
  const products = useSelector(selectProducts);
  const search = useSelector(selectSearch);
  const minPrice = useSelector(selectMinPrice);
  const maxPrice = useSelector(selectMaxPrice);
  const ratingFilter = useSelector(selectRating);
  const qtyProduct = useSelector(selectQtyProduct);
  const changeCard = useSelector(selectChangeCard);
  const dispatch = useDispatch();
  return (<>
    <Header />
    <NavPage title="Shop Left Sidebar" redText="Shop Left Sidebar" />
    <SortAside />
    <div className={style.mainContainer}>
      <div className={style.containerSide}>
        <div className={style.sortProduct}>
          <p className={style.titlesortSection}>Product Brand</p>
          <label className={style.labelCheckBox}>
            <input className={style.checkBoxProduct} type="checkbox" />
            Green DIY furniture
          </label>
          <label className={style.labelCheckBox}>
            <input className={style.checkBoxProduct} type="checkbox" />
            Fusion Dot High Fashion
          </label>
          <label className={style.labelCheckBox}>
            <input className={style.checkBoxProduct} type="checkbox" />
            Unique Furnitture Restor
          </label>
          <label className={style.labelCheckBox}>
            <input className={style.checkBoxProduct} type="checkbox" />
            Dream Furnitture Flipping
          </label>
          <label className={style.labelCheckBox}>
            <input className={style.checkBoxProduct} type="checkbox" />
            Young Repurposed
          </label>
          <label className={style.labelCheckBox}>
            <input className={style.checkBoxProduct} type="checkbox" />
            Green DIY furniture
          </label>
        </div>
        <div className={style.sortDiscount}>
          <p className={style.titlesortSection}>Discount Offer</p>
          <label className={style.labelCheckBox}>
            <input className={style.checkBoxDiscount} type="checkbox" />
            20% Cashback
          </label>
          <label className={style.labelCheckBox}>
            <input className={style.checkBoxDiscount} type="checkbox" />
            5% Cashback Offer
          </label>
          <label className={style.labelCheckBox}>
            <input className={style.checkBoxDiscount} type="checkbox" />
            25% Discount Offer
          </label>
        </div>

        <div className={style.sortRatingItem}>
          <p className={style.titlesortSection}>Rating Item</p>
          <div className={style.wrapImgText}>
            <div className={style.innerImgText}>
              <input checked={ratingFilter.includes(5)} type="checkbox" onChange={() => { dispatch(ratingChecked({ checked: 5 })) }} />
              <img className={style.star} src={goldStar} alt="" />
              <img className={style.star} src={goldStar} alt="" />
              <img className={style.star} src={goldStar} alt="" />
              <img className={style.star} src={goldStar} alt="" />
              <img className={style.star} src={goldStar} alt="" />
              <p className={style.textRatingItem}>(2341)</p>
            </div>
            <div className={style.innerImgText}>
              <input checked={ratingFilter.includes(4)} type="checkbox" onChange={() => { dispatch(ratingChecked({ checked: 4 })) }} />
              <img className={style.star} src={goldStar} alt="" />
              <img className={style.star} src={goldStar} alt="" />
              <img className={style.star} src={goldStar} alt="" />
              <img className={style.star} src={goldStar} alt="" />
              <img className={style.star} src={grayStar} alt="" />
              <p className={style.textRatingItem}>(1726)</p>
            </div>
            <div className={style.innerImgText}>
              <input checked={ratingFilter.includes(3)} type="checkbox" onChange={() => { dispatch(ratingChecked({ checked: 3 })) }} />
              <img className={style.star} src={goldStar} alt="" />
              <img className={style.star} src={goldStar} alt="" />
              <img className={style.star} src={goldStar} alt="" />
              <img className={style.star} src={grayStar} alt="" />
              <img className={style.star} src={grayStar} alt="" />
              <p className={style.textRatingItem}>(258)</p>
            </div>
            <div className={style.innerImgText}>
              <input checked={ratingFilter.includes(2)} type="checkbox" onChange={() => { dispatch(ratingChecked({ checked: 2 })) }} />
              <img className={style.star} src={goldStar} alt="" />
              <img className={style.star} src={goldStar} alt="" />
              <img className={style.star} src={grayStar} alt="" />
              <img className={style.star} src={grayStar} alt="" />
              <img className={style.star} src={grayStar} alt="" />
              <p className={style.textRatingItem}>(25)</p>
            </div>
          </div>
        </div>

        <div className={style.sortCategories}>
          <p className={style.titlesortSection}>Categories</p>
          <label className={style.labelCheckBox}>
            <input className={style.checkBoxCategories} type="checkbox" />
            Prestashop
          </label>
          <label className={style.labelCheckBox}>
            <input className={style.checkBoxCategories} type="checkbox" />
            Magento
          </label>
          <label className={style.labelCheckBox}>
            <input className={style.checkBoxCategories} type="checkbox" />
            Bigcommerce
          </label>
          <label className={style.labelCheckBox}>
            <input className={style.checkBoxCategories} type="checkbox" />
            Commerce
          </label>
          <label className={style.labelCheckBox}>
            <input className={style.checkBoxCategories} type="checkbox" />
            3dcart
          </label>
          <label className={style.labelCheckBox}>
            <input className={style.checkBoxCategories} type="checkbox" />
            Bags
          </label>
          <label className={style.labelCheckBox}>
            <input className={style.checkBoxCategories} type="checkbox" />
            Accessories
          </label>
          <label className={style.labelCheckBox}>
            <input className={style.checkBoxCategories} type="checkbox" />
            Jewellery
          </label>
          <label className={style.labelCheckBox}>
            <input className={style.checkBoxCategories} type="checkbox" />
            Watches
          </label>
        </div>

        <div className={style.sortPriceFilter}>
          <p className={style.titlesortSection}>Price Filter</p>
          <div className={style.wrapInput}>
            <input value={minPrice} onChange={(e) => { dispatch(searchMinPrice({ value: e.target.value })) }} className={style.input} type="number" placeholder="min price" />
            <input value={maxPrice} onChange={(e) => { dispatch(searchMaxPrice({ value: e.target.value })) }} className={style.input} type="number" placeholder="max price" />
            <div className={style.innerIcon}>
              <img className={style.imageSearch} src={searchInput} alt="" />
            </div>
          </div>
        </div>

        <div className={style.sortFilterByColor}>
          <p className={style.titlesortSection}>Filter By Color</p>
          <label className={style.labelCheckBox}>
            <input className={style.checkBoxFilterByColorBlue} type="checkbox" />
            Blue
          </label>
          <label className={style.labelCheckBox}>
            <input className={style.checkBoxFilterByColorOrange} type="checkbox" />
            Orange
          </label>
          <label className={style.labelCheckBox}>
            <input className={style.checkBoxFilterByColorBrown} type="checkbox" />
            Brown
          </label>
          <label className={style.labelCheckBox}>
            <input className={style.checkBoxFilterByColorGreen} type="checkbox" />
            Green
          </label>
          <label className={style.labelCheckBox}>
            <input className={style.checkBoxFilterByColorPurple} type="checkbox" />
            Purple
          </label>
          <label className={style.labelCheckBox}>
            <input className={style.checkBoxFilterByColorSky} type="checkbox" />
            Sky
          </label>
        </div>
      </div>
      
      <div className={style.containerShopLeftSidebar}>
        {products.filter((item: TypeProducts) => {
          return item.title.includes(search) &&
            (minPrice < item.price || minPrice == 0) &&
            (maxPrice > item.price || maxPrice == 0) &&
            (ratingFilter.includes(item.ratingProduct) ||
              ratingFilter.length == 0)
        })
          .slice(0, qtyProduct)
          .map((item: TypeProducts) => {
            return (
              <Link className={style.link} to={`/productDetails/${item.id}`} >
                {changeCard === "card" ? <CardProduct  product={item}/> : <RowProduct product={item}/>}
              </Link>
            )
          })}
      </div>
    </div>
    <Artboards />
    <Footer/>
  </>)
}
export default ShopLeftSidebar;