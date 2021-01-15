import './CouponsPage.css'

import { YMaps, Map } from 'react-yandex-maps';

import appleMusic from '../../images/apple-music.png'
import moscowGreen from '../../images/moscow-green.png'
import moscowRed from '../../images/moscow-red.png'
import banner from '../../images/banner.png'
import { NavLink } from 'react-router-dom'

export default function CouponsPage() {
    return (
        <>
            <div className="gray__wrapper">
                <div className="container">
                    <div className="main__title ">Apple Music за СПАСИБО</div>
                </div>
            </div>        
            <div className="gray__wrapper">
                <div className="container p-0 bg--white border-radius-30">
                    <div className="banner__block border-radius-30">
                        <div className="banner__block__img "><img src={banner} alt="banner" /></div>
                    </div>
                    <div className="content__block ">
                        <div className="content__h2--text text-center">C 17 Декабря 2018 г. по 17 Декабря 2019 г.</div>
                        <div className="content__div--text">Обменивайте 169 СПАСИБО на месяц подписки в Apple Music и наслаждайтесь любимой музыкой без перерыва.</div>
                        <ul className="content__ul--text">
                            <li><span>Получите доступ к миллионам альбомов, исполнителей и песен</span></li>
                            <li><span>Эксклюзивный и оригинальный контент</span></li>
                            <li><span>Вы можете отказаться от подписки в любой момент</span></li>
                            <li><span>Скачивайте любимую музыку и слушайте офлайн</span></li>
                        </ul>
                        <div className="content__div--bold-text">Как использовать промо-код:</div>
                        <ol className="content__ol--text">
                            <li>
                                <span>
                                    Откройте приложение «Музыка» и введите существующий Apple ID и 
                                    пароль для входа в учетную запись. 
                                    (Если у   вас нет Apple ID, вам будет предложено его создать).
                                </span>
                            </li>
                            <li><span>Нажмите на «3 месяца бесплатно» (специальное предложение для новых пользователей).</span></li>
                            <li><span>Выберите индивидуальную подписку и нажмите «3 месяца бесплатно».</span></li>
                            <li><span>Перейдите в учетную запись.</span></li>
                            <li><span>Нажмите «Использовать код».</span></li>
                            <li><span>Введите 12-значный код.</span></li>
                            <li><span>Получите сообщение с подтверждением использования кода.</span></li>
                        </ol>
                        <p className="content__p--text">
                            Под персональными данными в целях настоящих 
                            Правил понимаются персональные данные 
                            Участников Акции и иных лиц - субъектов персональных данных как они определены в 
                            Законе «О персональных данных». Под обработкой персональных данных в 
                            настоящих <span className="content__span--bold-text">Правилах понимается любое действие</span> (операция), совершаемое 
                            в целях проведения Акции, или совокупность действий(операций), 
                            совершаемых с использованием средств автоматизации или без использования таких средств 
                            с персональными данными, включая сбор, запись, систематизацию, накопление, хранение, 
                            уточнение (обновление, изменение), извлечение, использование, 
                            передачу (распространение, предоставление, доступ), обезличивание, 
                            блокирование, удаление, уничтожение персональных
                            данных, предоставленных Участником Акции Банку/ Уполномоченной Компании.
                        </p>
                        <div>
                            <NavLink to="/coupons" className="content__link">Подробнее об Apple Music для Android</NavLink>
                        </div>
                        <div>
                            <NavLink to="/coupons" className="content__link">Правила акции</NavLink>
                        </div>
                        <p className="content__p--small-text">
                            Только при оформлении индивидуальной подписки. 
                            По окончании пробного периода подписка будет продлена автоматически. 
                            4 месяца бесплатно только для новых подписчиков. 
                            Срок действия кода истекает 31 января 2020 года. 
                            Это промокод, который не подлежит перепродаже, обмену на денежный 
                            эквивалент и замене в случае кражи или потери.
                            Предложение действительно при оформлении индивидуальной подписки на Apple Music 
                            на территории Российской Федерации. Требуется учетная запись iTunes. 
                            Применяются соответствующие условия (<NavLink to="/coupons" className="content__link">подробнее</NavLink>).
                            Промокодом может воспользоваться лицо старше 13 лет, чье местоположение совпадает со страной/регионом магазина, в котором активируется код.
                            Требуются совместимые продукты и сервисы. Apple Music — зарегистрированная торговая марка Apple. Apple не является участником или спонсором этой промоакции.
                        </p>
                    </div>
                </div>
            </div>

            <div className="gray__wrapper">
                <div className="container">
                    <div className="action__title">
                        <div className="action__title__img"><img src={appleMusic} alt="title" /></div>
                        <div className="action__title__text">Apple Music</div>
                    </div>
                    <div className="action__cards__block">
                        <div className="action__card">
                            <div className="action__card__img"><img src={appleMusic} alt="icon" /></div>
                            <div className="action__card_info">Москва, ул. Большая Татарская, 21</div>
                            <div className="action__card_info">
                                <img src={moscowGreen} alt="moscow-green" /><span>Маяковская</span>
                                <img src={moscowRed} alt="moscow-red" /><span>Лубянка</span>
                            </div>
                            <div className="action__card_info">+7 495 220-30-44</div>
                            <div className="action__card_info">Ежедневно с 09:00 до 21:00</div>
                            <div className="action__card_info"><NavLink to="/coupons" className="content__link">apple.com</NavLink></div>
                            <div className="action__card__map">Проложить маршрут</div>
                        </div>
                        <div className="action__card">
                            <div className="action__card__img"><img src={appleMusic} alt="icon" /></div>
                            <div className="action__card_info">Москва, ул. Большая Татарская, 21</div>
                            <div className="action__card_info">
                                <img src={moscowGreen} alt="moscow-green" /><span>Маяковская</span>
                                <img src={moscowRed} alt="moscow-red" /><span>Лубянка</span>
                            </div>
                            <div className="action__card_info">+7 495 220-30-44</div>
                            <div className="action__card_info">Ежедневно с 09:00 до 21:00</div>
                            <div className="action__card_info"><NavLink to="/coupons" className="content__link">apple.com</NavLink></div>
                            <div className="action__card__map">Проложить маршрут</div>
                        </div>
                        <div className="action__card">
                            <div className="action__card__img"><img src={appleMusic} alt="icon" /></div>
                            <div className="action__card_info">Москва, ул. Большая Татарская, 21</div>
                            <div className="action__card_info">
                                <img src={moscowGreen} alt="moscow-green" /><span>Маяковская</span>
                                <img src={moscowRed} alt="moscow-red" /><span>Лубянка</span>
                            </div>
                            <div className="action__card_info">+7 495 220-30-44</div>
                            <div className="action__card_info">Ежедневно с 09:00 до 21:00</div>
                            <div className="action__card_info"><NavLink to="/coupons" className="content__link">apple.com</NavLink></div>
                            <div className="action__card__map">Проложить маршрут</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="gray__wrapper">
                <div className="container">
                    <div className="yandex__map">
                        <YMaps>
                            <div>
                            <Map 
                                defaultState={{ 
                                    center: [55.75, 37.57], 
                                    zoom: 9, 
                                }} 
                                width="100%"
                                height="350px"
                            />
                            </div>
                        </YMaps>
                    </div>
                </div>
            </div>  
        </>      
    )
}