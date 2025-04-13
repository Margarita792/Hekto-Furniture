import Header from '../../HomePage/Header/Header';
import NavPage from '../../GridDefault/NavPage/NavPage';
import Artboards from '../../HomePage/Artboards/Artboards';
import Footer from '../../HomePage/Footer/Footer';
import style from './SignUp.module.css';
import { useNavigate } from 'react-router-dom';
import { registerNewUser } from '../../../Store/productSlice';
import { useDispatch } from 'react-redux';
import { TypeUserInterface } from '../../../interfaces/productInterface';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

function SignUp() {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit
  } = useForm<TypeUserInterface>();
  const dispatch = useDispatch();
  const onSubmit: SubmitHandler<TypeUserInterface> = (data) => {
    dispatch(registerNewUser(data));
  }
  const navigate = useNavigate();
  return (
    <div>
        <Header/>
        <NavPage title={t("signUp.titleNav")} redText={t("signUp.titleNav")} />
    <div className={style.container}>
    <div className={style.wrap}>
    <p className={style.title}>{t("signUp.title")}</p>
    <p className={style.subtitle}>{t("signUp.subtitle")}</p>
      <form className={style.formInput} onSubmit={handleSubmit(onSubmit)}>
        <input className={style.input} {...register("firstName", { required: true })} type="text" placeholder={t("signUp.placeholderFirstName")} />
        <input className={style.input} {...register("lastName", { required: true })} type="text" placeholder={t("signUp.placeholderLastName")} />
        <input className={style.input} {...register("email", { required: true })} type="text" placeholder={t("signUp.placeholderEmail")} />
        <input className={style.input} {...register("login", { required: true })} type="text" placeholder={t("signUp.placeholderLogin")} />
        <input className={style.input} {...register("password", { required: true })} type="text" placeholder={t("signUp.placeholderPassword")} />
        <input className={style.input} {...register("balance", { required: true })} type="number" placeholder={t("signUp.placeholderBalance")} />
        <p className={style.text}>{t("signUp.forgotPassword")}</p>
        <input className={style.inputSignUp} type="submit" value={t("signUp.button")} onClick={() => navigate("/newUser")}/>
      </form>
      <p onClick={() => navigate("/logIn")} className={style.textLogIn}>{t("signUp.haveAccount")}</p>
    </div>
    </div>
    <Artboards/>
    <Footer/>
    </div>
  )
}
export default SignUp;