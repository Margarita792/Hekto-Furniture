import style from './LogIn.module.css';
import Header from '../../HomePage/Header/Header';
import NavPage from '../../GridDefault/NavPage/NavPage';
import Artboards from '../../HomePage/Artboards/Artboards';
import Footer from '../../HomePage/Footer/Footer'; import { useNavigate } from 'react-router-dom';
import { TypeUserInterface } from '../../../interfaces/productInterface';
import { useForm, SubmitHandler } from 'react-hook-form'
import { selectAuthoriz, setAuthoriz } from '../../../store/productSlice';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../../hooks';

function LogIn() {
  const { t } = useTranslation();
  const authoriz = useAppSelector(selectAuthoriz);
  useEffect(() => {
    if (authoriz != null) {
      navigate("/newUser")
    }
  }, [authoriz])
  const {
    register,
    handleSubmit
  } = useForm<TypeUserInterface>();
  const dispatch = useAppDispatch();
  const onSubmit: SubmitHandler<TypeUserInterface> = (data) => {
    dispatch(setAuthoriz(data));
  }
  const navigate = useNavigate();
  return (<>
    <Header />
    <NavPage title={t("login.titleNav")} redText={t("login.titleNav")} />
    <div className={style.container}>
      <div className={style.wrap}>
        <p className={style.title}>{t("login.title")}</p>
        <p className={style.subtitle}>{t("login.subtitle")}</p>
        <form className={style.formInput} onSubmit={handleSubmit(onSubmit)}>
          <input className={style.input} {...register("login", { required: true })} type="text" placeholder={t("login.loginPlaceholder")} />
          <input className={style.input} {...register("password", { required: true })} type="text" placeholder={t("login.passwordPlaceholder")} />
          <p className={style.text}>{t("login.forgotPassword")}</p>
          <input className={style.inputSignUp} type="submit" value={t("login.button")} />
        </form>
        <p onClick={() => navigate("/signUp")} className={style.textLogIn}>{t("login.createAccount")}</p>
      </div>
    </div>
    <Artboards />
    <Footer />
  </>)
}
export default LogIn;