import './Companies.css'
import burgerKing from '../../images/burger_king.png'
import colls1 from '../../images/colls1.png'
import colls3 from '../../images/colls3.png'
import colls4 from '../../images/colls4.png'
import colls5 from '../../images/colls5.png'
import colls6 from '../../images/colls6.png'
import colls8 from '../../images/colls8.png'
import colls9 from '../../images/colls9.png'
import colls10 from '../../images/colls10.png'
import colls11 from '../../images/colls11.png'
import colls12 from '../../images/colls12.png'
import colls13 from '../../images/colls13.png'
import colls14 from '../../images/colls14.png'
import colls15 from '../../images/colls15.png'
import colls16 from '../../images/colls16.png'

export default function Companies() {
    return (
        <div className="gray__wrapper">
            <div className="container">
                <div className="companies__block">
                    <div className="company__block">
                        <div className="company__img"><img src={burgerKing} alt="company" /></div>
                        <div className="company__img"><img src={colls3} alt="company" /></div>
                        <div className="company__img"><img src={colls4} alt="company" /></div>
                        <div className="company__img"><img src={colls5} alt="company" /></div>
                        <div className="company__img"><img src={colls1} alt="company" /></div>
                        <div className="company__block__title">Скидки за бонусы</div>
                    </div>
                    <div className="companies__group">
                        <div className="company__block">
                            <div className="company__img">
                                <img src={colls6} alt="company" />
                                <div className="company__img__hint"><span>3%</span></div>
                            </div>
                            <div className="company__img">
                                <img src={colls3} alt="company" />
                                <div className="company__img__hint"><span>1.5%</span></div>
                            </div>
                            <div className="company__img">
                                <img src={colls8} alt="company" />
                                <div className="company__img__hint"><span>5%</span></div>
                            </div>
                            <div className="company__block__title">Большой % начисления</div>
                        </div> 
                        <div className="company__block">
                            <div className="company__img">
                                <img src={colls9} alt="company" />
                            </div>
                            <div className="company__img">
                                <img src={colls10} alt="company" />
                            </div>
                            <div className="company__img">
                                <img src={colls11} alt="company" />
                            </div>
                            <div className="company__block__title">Выгодные купоны</div>
                        </div> 
                    </div>
                    <div className="company__block">
                        <div className="company__img"><img src={colls12} alt="company" /></div>
                        <div className="company__img"><img src={colls13} alt="company" /></div>
                        <div className="company__img"><img src={colls14} alt="company" /></div>
                        <div className="company__img"><img src={colls15} alt="company" /></div>
                        <div className="company__img"><img src={colls16} alt="company" /></div>
                        <div className="company__block__title">Персональное исходя из трат</div>
                    </div>
                </div>
            </div>
        </div>          
    )
}