import './Partners.css'
import mvideo from '../../images/mvideo.png'
import burgerKing from '../../images/burger_king.png'
import techPark from '../../images/tech_park.png'
import bcrk from '../../images/bcrk.png'
import evroset from '../../images/evroset.png'
import { useDispatch, useSelector } from 'react-redux'
import { changeCategoryIndex, changeBonusType } from '../../redux/actions'

const categories = [
    { id: 1, name: 'Все партнеры' },
    { id: 2, name: 'Популярные' },
    { id: 3, name: 'Супермаркеты' },
    { id: 4, name: 'Кафе и рестораны' },
    { id: 5, name: 'Такси' },
    { id: 6, name: 'Красота' },
    { id: 7, name: 'Электроника и бытовая техника' },
    { id: 8, name: 'Зоотовары' },
    { id: 9, name: 'Кино и театр' },
]

const noop = () => {}


export default function Partners() {
    let bonusType = useSelector(state => state.bonusType)
    let curCategoryIndex = useSelector(state => state.curCategoryIndex)
    const dispatch = useDispatch()

    const fetchClickHandler = () => {
        alert('Здесь могут быть загружены данные с сервера.')
    }

    const changeCategoryHanlder = id => {
        dispatch(changeCategoryIndex(id))
    }

    const changeBonusTypeHandler = () => {
        dispatch(changeBonusType())
    }

    return (
        <div className="gray__wrapper">
            <div className="container">
                <div className="main__title">Партнеры и предложения</div>
                <div className="partners__block">
                    <div className="partners__categires__btns">
                        { categories.map(category => {
                            return (
                                <button 
                                    key={category.id} 
                                    className={`btn btn--white ${ curCategoryIndex === category.id ? 'active' : '' }`}
                                    onClick={() => { 
                                        changeCategoryHanlder(category.id)
                                    }}
                                >
                                    {category.name}
                                </button>
                            )
                        }) }
                        <button className="btn btn--white">...</button>
                    </div>
                    <div className="partners__checkbox_block">
                        <div className={`partners__checkbox__title ${ bonusType === 'take' ? 'active' : '' }`}>Начисляют <br /> спасибо</div>
                        <div className="partners__checkbox">
                            <label className="checkbox__toggle">
                                <input 
                                    type="checkbox" 
                                    className="toggle__real" 
                                    name="switch_type" 
                                    checked={ bonusType === 'give' ? true : false }
                                    onChange={noop}
                                />
                                <span onClick={changeBonusTypeHandler} className="toggle__fake"></span>
                            </label>
                        </div>
                        <div className={`partners__checkbox__title ${ bonusType === 'give' ? 'active' : '' }`}>Принимают <br /> спасибо</div>
                    </div>
                    <div className="partners__cards_block">
                        <div className="partners__card">
                            <div className="partners__card__title">1,5%</div>
                            <div className="partners__card__subtitle">Спасибо от суммы покупки</div>
                            <div className="partners__card__img"><img src={mvideo} alt="partner" /></div>
                            <div className="partners__card__maintitle">М.Видео</div>
                        </div>
                        <div className="partners__card">
                            <div className="partners__card__title">3%</div>
                            <div className="partners__card__subtitle">Спасибо от суммы покупки</div>
                            <div className="partners__card__img"><img src={burgerKing} alt="partner" /></div>
                            <div className="partners__card__maintitle">Бургер Кинг</div>
                        </div>
                        <div className="partners__card">
                            <div className="partners__card__title">4,5%</div>
                            <div className="partners__card__subtitle">Спасибо от суммы покупки</div>
                            <div className="partners__card__img"><img src={techPark} alt="partner" /></div>
                            <div className="partners__card__maintitle">Холодильник.ру</div>
                        </div>
                        <div className="partners__card">
                            <div className="partners__card__title">от 1,5%</div>
                            <div className="partners__card__subtitle">Спасибо от суммы покупки</div>
                            <div className="partners__card__img"><img src={bcrk} alt="partner" /></div>
                            <div className="partners__card__maintitle">BORK</div>
                        </div>
                        <div className="partners__card">
                            <div className="partners__card__title">1,5%</div>
                            <div className="partners__card__subtitle">Спасибо от суммы покупки</div>
                            <div className="partners__card__img"><img src={evroset} alt="partner" /></div>
                            <div className="partners__card__maintitle">Евросеть</div>
                        </div>
                        <div className="common__btn__block">
                            <button onClick={fetchClickHandler} type="button" className="btn btn--green">Ещё 4 партнера</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>        
    )
}