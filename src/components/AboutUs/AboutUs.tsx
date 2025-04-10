import NavPage from '../GridDefault/NavPage/NavPage';
import Header from '../HomePage/Header/Header';
import style from './AboutUs.module.css';
import image from '../../assets/AboutUs/Rectangle 56.svg'
import ShopexOffer from '../HomePage/ShopexOffer/ShopexOffer';
import Foooter from '../HomePage/Footer/Footer';


function AboutUs() {
    return (<>
        <Header />
        <NavPage title="About Us" redText="About Us" />
        <div className={style.container}>
            <div className={style.wrapImage}>
                <img className={style.image} src={image} alt="" />
            </div>
            <div className={style.wrapText}>
                <h1 className={style.title}>Know About Our Ecomerce
                    Business, History</h1>
                <p className={style.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.</p>
                <button className={style.button}>Contact us</button>
            </div>
        </div>
        <ShopexOffer/>
        <Foooter/>
    </>)
}

export default AboutUs