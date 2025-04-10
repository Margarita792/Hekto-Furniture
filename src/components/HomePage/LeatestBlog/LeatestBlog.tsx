import style from './LeatestBlog.module.css';
import icon1 from '../../../assets/HomePage/LeatestBlog/Vector.svg';
import icon2 from '../../../assets/HomePage/LeatestBlog/Vector (1).svg';
import { useTranslation } from 'react-i18next';
import { selectBlog } from '../../../Store/productSlice';
import { useSelector } from 'react-redux';
import { TypeBlog } from '../../../interfaces/productInterface';
import { useNavigate } from 'react-router-dom';

function LeatestBlog() {
    const navigate = useNavigate();
    const blog = useSelector(selectBlog);
    const { t } = useTranslation();
    return (<>
    <p className={style.titleContainer}>{t("leatestBlog.title")}</p>
<div className={style.container}>

        {blog.slice(0, 3)
            .map((item:TypeBlog, index) => {
                return(
                
                    <div key={index}  className={style.wrapper}>
                        <div className={style.wrapCard}>
                            <img className={style.image1} src={item.img} alt="" />
                            <div className={style.innerIconText}>
                                <img className={style.icon} src={icon1} alt="" />
                                <p className={style.textInner}>{item.author}</p>
                                <img className={style.icon} src={icon2} alt="" />
                                <p className={style.textInner}>{item.date}</p>
                            </div>
                            <p className={style.title}>{item.title}</p>
                            <p className={style.description}>{item.description}</p>
                            <p onClick={()=>{navigate("/blogPage")}} className={style.textLink}>{item.linkReadMore}</p>
                        </div>
                    </div>
                
           ) })}
           </div>
    </>)
}
export default LeatestBlog;