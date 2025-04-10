import Artboards from './Artboards/Artboards'
import DiscountItem from './DiscountItem/DiscountItem'
import FeaturedProducts from './FeaturedProducts/FeaturedProducts'
import Foooter from './Footer/Footer'
import GetLeatest from './GetLeatest/GetLeatest'
import Header from './Header/Header'
import LatestProducts from './LatestProducts/LatestProducts'
import LeatestBlog from './LeatestBlog/LeatestBlog'
import NewCollection from './NewCollection/NewCollection'
import ShopexOffer from './ShopexOffer/ShopexOffer'
import TopCategories from './TopCategories/TopCategories'
import TrendingProducts from './TrendingProducts/TrendingProducts'
import UniqueFeatures from './UniqueFeatures/UniqueFeatures';
import '../../../node_modules/swiper/swiper.css';
import '../../../node_modules/swiper/modules/pagination.css';
function HomePage() {
    return (<>
        <Header />
        <NewCollection />
        <FeaturedProducts />
        <LatestProducts />
        <ShopexOffer />
        <UniqueFeatures />
        <TrendingProducts />
        <DiscountItem />
        <TopCategories />
        <GetLeatest />
        <Artboards />
        <LeatestBlog />
        <Foooter />
    </>
    )
}
export default HomePage;