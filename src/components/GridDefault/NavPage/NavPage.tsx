import { Link } from 'react-router-dom';
import style from './NavPage.module.css'
interface NavPageProps{
    title: string;
    redText: string;
}
function NavPage({title="Shop Grid Default",redText="Shop Grid Default"}: NavPageProps) {
    return (
        <div className={style.container}>
            <div className={style.wrap}>
                <h1 className={style.title}>{title}</h1>
                <div className={style.inner}>
                    <Link to="/" className={style.link}>
                    <p className={style.textHome}>Home. Page</p>
                    </Link>
                    <p className={style.redText}>{redText}</p>
                </div>
            </div>
        </div>
    )
}
export default NavPage;