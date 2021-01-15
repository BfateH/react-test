import './Offers.css'
import techPark from '../../images/tech_park.png'
import offer1 from '../../images/offer_1.jpg'
import offer2 from '../../images/offer_2.jpg'
import offer3 from '../../images/offer_3.jpg'
import evroset from '../../images/evroset.png'
import mvideo from '../../images/mvideo.png'

export default function Offers() {

    const fetchClickHandler = () => {
        alert('Здесь могут быть загружены данные с сервера.')
    }

    return (
        <div className="gray__wrapper">
            <div className="container">
                <div className="main__subtitle">3 предложения в категории «Электроника и бытовая техника»</div>
                <div className="offers__block">
                    <div className="offer__block">
                        <div className="offer__img"><img src={offer1} alt="offer" /></div>
                        <div className="offer__footer">
                            <div className="offer__footer__img">
                                <img src={techPark} alt="icon" />
                            </div>
                            <div className="offer__footer__info">
                                <div className="offer__footer__title">Технопарк</div>
                                <div className="offer__footer__subtitle">20% спасибо за технику Electrolux</div>
                            </div>
                        </div>
                    </div>
                    <div className="offer__block">
                        <div className="offer__img"><img src={offer2} alt="offer" /></div>
                        <div className="offer__footer">
                            <div className="offer__footer__img">
                                <img src={evroset} alt="icon" />
                            </div>
                            <div className="offer__footer__info">
                                <div className="offer__footer__title">Евросеть</div>
                                <div className="offer__footer__subtitle">10% спасибо за покупки в черную пятницу</div>
                            </div>
                        </div>
                    </div>
                    <div className="offer__block">
                        <div className="offer__img"><img src={offer3} alt="offer" /></div>
                        <div className="offer__footer">
                            <div className="offer__footer__img">
                                <img src={mvideo} alt="icon" />
                            </div>
                            <div className="offer__footer__info">
                                <div className="offer__footer__title">М.Видео</div>
                                <div className="offer__footer__subtitle">15% спасибо для студентов</div>
                            </div>
                        </div>
                    </div>
                    <div className="common__btn__block">
                        <button onClick={fetchClickHandler} type="button" className="btn btn--green">Ещё 4 предложения</button>
                    </div>
                </div>
            </div>
        </div>         
    )
}