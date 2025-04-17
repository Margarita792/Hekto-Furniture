import Header from "../../HomePage/Header/Header";
import NavPage from "../../GridDefault/NavPage/NavPage";
import style from './NewUser.module.css'
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { selectNewUser } from "../../../store/productSlice"
import { TypeUserInterface } from "../../../interfaces/productInterface";

function NewUser() {
    const newUser = useSelector(selectNewUser);
    const { t } = useTranslation();
    return (<>
        <Header />
        <NavPage title={t("newUser.title")} redText={t("newUser.title")} />
        {newUser.map((item: TypeUserInterface, index) => {
            return (
                <div key={index} className={style.container}>
                    <div className={style.wrap}>
                        <div className={style.wrapTitle}>
                        <p className={style.text}>{t("newUser.firstName")}</p>
                            <p className={style.text}>{t("newUser.lastName")}</p>
                            <p className={style.text}>{t("newUser.email")}</p>
                            <p className={style.text}>{t("newUser.login")}</p>
                            <p className={style.text}>{t("newUser.password")}</p>
                            <p className={style.text}>{t("newUser.balance")}</p>
                        </div>
                        <div className={style.wrapValue}>
                        <p className={style.textValue}>{item.firstName}</p>
                        <p className={style.textValue}>{item.lastName}</p>
                        <p className={style.textValue}>{item.email}</p>
                        <p className={style.textValue}>{item.login}</p>
                        <p className={style.textValue}>{item.password}</p>
                        <p className={style.textValue}>{item.balance}</p>
                        </div>
                    </div>
                </div>
            )
        })}
    </>)
}
export default NewUser;