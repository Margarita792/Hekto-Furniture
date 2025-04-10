import style from './Footer.module.css';
import logo from '../../../assets/HomePage/Footer/Hekto.svg';
import icon1 from '../../../assets/HomePage/Footer/Group 202.svg';
import icon2 from '../../../assets/HomePage/Footer/Group 203.svg';
import icon3 from '../../../assets/HomePage/Footer/Group 204.svg';
import { useTranslation } from 'react-i18next';

function Footer() {
    const { t } = useTranslation();
    return (<>
        <div className={style.container1}>
            <div className={style.sectionHekto}>
                <img className={style.logo} src={logo} alt="" />
                <div className={style.wrapInputButton}>
                    <input className={style.input} type="text" placeholder={t("footer.inputPlaceholder")} />
                    <button className={style.button}>{t("footer.signUp")}</button>
                </div>
                <p className={style.text}>{t("footer.contactInfo")}</p>
                <p className={style.text}>{t("footer.address")}</p>
            </div>

            <div className={style.section}>
                <p className={style.title}>{t("footer.categoriesTitle")}</p>
                <p className={style.text}>{t("footer.categories1")}</p>
                <p className={style.text}>{t("footer.categories2")}</p>
                <p className={style.text}>{t("footer.categories3")}</p>
                <p className={style.text}>{t("footer.categories4")}</p>
                <p className={style.text}>{t("footer.categories5")}</p>
            </div>

            <div className={style.section}>
                <p className={style.title}>{t("footer.customerCareTitle")}</p>
                <p className={style.text}>{t("footer.customerCare1")}</p>
                <p className={style.text}>{t("footer.customerCare2")}</p>
                <p className={style.text}>{t("footer.customerCare3")}</p>
                <p className={style.text}>{t("footer.customerCare4")}</p>
                <p className={style.text}>{t("footer.customerCare5")}</p>
            </div>

            <div className={style.section}>
                <p className={style.title}>{t("footer.blogTitle")}</p>
                <p className={style.text}>{t("footer.blog1")}</p>
                <p className={style.text}>{t("footer.blog2")}</p>
                <p className={style.text}>{t("footer.blog3")}</p>
                <p className={style.text}>{t("footer.blog4")}</p>
                <p className={style.text}>{t("footer.blog5")}</p>
            </div>
        </div>
        <div className={style.container2}>
            <div>
                <p className={style.text}>{t("footer.copyright")}</p>
            </div>
            <div>
                <img className={style.icon} src={icon1} alt="" />
                <img className={style.icon} src={icon2} alt="" />
                <img className={style.icon} src={icon3} alt="" />
            </div>
        </div>
    </>)
}
export default Footer;