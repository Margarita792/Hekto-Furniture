import NavPage from "../GridDefault/NavPage/NavPage";
import Header from "../HomePage/Header/Header";
import image from '../../assets/NotFound/Group 123.jpg';
import style from './NotFound.module.css';
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
function NotFound() {
    const {t}= useTranslation();
    const navigate = useNavigate();
  return (<>
  <Header/>
  <NavPage title={t("NotFound.NavPage.title")} redText={t("NotFound.NavPage.title")}/>
  <div className={style.wrapper}>
    <img className={style.image}src={image} alt="" />
    <button onClick={()=>{navigate("/")}} className={style.button}>Back to home</button>
  </div>
 </> )
}

export default NotFound;