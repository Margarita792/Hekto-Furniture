import { useTranslation } from "react-i18next";
import NavPage from "../GridDefault/NavPage/NavPage";
import Header from "../HomePage/Header/Header";
import style from './ContactUs.module.css';
import ellipse1 from '../../assets/ContactUs/Group 94.svg';
import ellipse2 from '../../assets/ContactUs/Ellipse 44.svg';
import ellipse3 from '../../assets/ContactUs/Ellipse 45.svg';
import ellipse4 from '../../assets/ContactUs/Ellipse 46.svg';
import ellipse5 from '../../assets/ContactUs/Ellipse 47.svg';
import image from '../../assets/ContactUs/Group 124.svg';
import Footer from "../HomePage/Footer/Footer";
import { Link } from "react-router-dom";

function ContactUs() {
  const { t } = useTranslation();
  return (<>
    <Header />
    <NavPage title={t("ContactUs.NavPage.title")} redText={t("ContactUs.NavPage.title")} />
    <div className={style.containerContactUs}>
      <div className={style.wrapContactUs}>
        <div className={style.wrapInform}>
          <div className={style.innerInformationAboutUs}>
            <Link className={style.link} to = "/aboutUs">
              <p className={style.titleInformationAboutUs}>{t("ContactUs.infoTitle")}</p>
            </Link>
            <p className={style.textLoremIpsum}>{t("ContactUs.infoText")}</p>
            <img className={style.imageInformationAboutUs} src={ellipse1} alt="" />
          </div>
          <div className={style.innerGetInTouch}>
            <p className={style.titleGetInTouch}>{t("ContactUs.touchTitle")}</p>
            <p className={style.textLoremIpsum}>{t("ContactUs.touchText")}</p>
            <input className={style.inputYourName} type="text" placeholder={t("ContactUs.placeholderName")} />
            <input className={style.inputYourEmail} type="text" placeholder={t("ContactUs.placeholderEmail")} />
            <input className={style.inputSubject} type="text" placeholder={t("ContactUs.placeholderSubject")} />
            <input className={style.inputTypeYourMessege} type="text" placeholder={t("ContactUs.placeholderMessage")} />
            <button className={style.buttonSendMail}>{t("ContactUs.sendButton")}</button>
          </div>
        </div >
        <div className={style.sectionContactWay}>
          <p className={style.titleContactWay}>{t("ContactUs.contactWay")}</p>
          <div className={style.wrapContactWay}>
            <div className={style.innerContact}>
              <img className={style.ellipse} src={ellipse2} alt="" />
              <p className={style.textContact}>{t("ContactUs.contactDetails")}</p>
            </div>
            <div className={style.innerAddress}>
              <img className={style.ellipse} src={ellipse3} alt="" />
              <p className={style.textAddress}>{t("ContactUs.address")}</p>
            </div>
            <div className={style.innerSupport}>
              <img className={style.ellipse} src={ellipse4} alt="" />
              <p className={style.textSupport}>{t("ContactUs.support")}</p>
            </div>
            <div className={style.innerFreeStandard}>
              <img className={style.ellipse} src={ellipse5} alt="" />
              <p className={style.textFreeStandard}>{t("ContactUs.freeShipping")}</p>
            </div>
            <img className={style.imageContactWay} src={image} alt="" />
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </>)
}

export default ContactUs;