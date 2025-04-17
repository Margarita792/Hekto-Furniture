import style from './SortAside.module.css';
import icon1 from '../../../assets/GridDefault/SortAside/clarity_grid-view-solid.svg';
import icon2 from '../../../assets/GridDefault/SortAside/fa-solid_list.svg';
import { useDispatch } from 'react-redux';
import { searchTitle } from '../../../store/productSlice';
import { selectSearch } from '../../../store/productSlice';
import { useSelector } from 'react-redux';
import { qtyProduct, changeCard } from '../../../store/productSlice';
import { useTranslation } from 'react-i18next';

function SortAside() {
    const search = useSelector(selectSearch);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    return (
        <div className={style.container}>
            <div className={style.wrapText}>
                <p className={style.title}>{t("sortaside.title")}</p>
                <p className={style.subtitle}>{t("sortaside.subtitle")}</p>
            </div>
            <div className={style.wrapInput}>
                <p className={style.text}>{t("sortaside.text1")}</p>
                <select className={style.selectPerPage} onChange={(e) => { dispatch(qtyProduct({ value: e.target.value })) }}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>
                    <option value={11}>11</option>
                    <option value={12}>12</option>
                </select>
                <p className={style.text}>{t("sortaside.text2")}</p>
                <select className={style.select} name="" id="">
                    <option>{t("sortaside.option")}</option>
                </select>
                <p className={style.text}>{t("sortaside.text3")}</p>
                <img onClick={() => { dispatch(changeCard("card")) }} className={style.icon} src={icon1} alt="" />
                <img onClick={() => { dispatch(changeCard("row")) }} className={style.icon} src={icon2} alt="" />
                <input value={search} onChange={(e) => { dispatch(searchTitle({ value: e.target.value })) }} className={style.input2} type="text" />
            </div>
        </div>
    )
}
export default SortAside;