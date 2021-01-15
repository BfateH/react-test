import './Footer.css'
import sberlogo from '../../images/sberlogo.svg'
import googlePlay from '../../images/google-play.png'
import appStore from '../../images/app-store.png'
import Menu from '../Menu/Menu'

export default function Footer() {
    return (
        <footer className="white__wrapper margin-top-auto">
            <div className="container">
                <div className="footer__block">
                    <div className="footer__sberinfo">
                        <div className="footer__sberinfo__phone__block">
                            <div className="footer__sberinfo__phone">900</div>
                            <div className="footer__sberinfo__title">По России бесплатно</div>
                        </div>
                        <div className="footer__sberinfo__logo__block">
                            <img src={sberlogo} alt="logo" />
                        </div>
                        <div className="footer__sberinfo__copyright__block">
                            © 1997—2019 ПАО Сбербанк.
                        </div>
                    </div>
                    <div className="footer__contacts">
                        <div className="footer__contacts__menu">
                            <Menu className="footer__menu"/>
                        </div>
                        <div className="footer__contacts__socials">
                            <div className="footer__contacts__socials__apps">
                                <div className="footer__app">
                                    <a href="/"><img src={googlePlay} alt="google-play" /></a>
                                </div>
                                <div className="footer__app">
                                    <a href="/"><img src={appStore} alt="app-store" /></a>
                                </div>
                            </div>
                            <div className="footer__contacts__socials__networks">
                                <div className="footer__contacts__social__network ok"><a href="/"><i className="fab fa-odnoklassniki"></i></a></div>
                                <div className="footer__contacts__social__network fb"><a href="/"><i className="fab fa-facebook-f"></i></a></div>
                                <div className="footer__contacts__social__network vk"><a href="/"><i className="fab fa-vk"></i></a></div>
                                <div className="footer__contacts__social__network insta"><a href="/"><i className="fab fa-instagram"></i></a></div>
                            </div>
                        </div>
                        <div className="footer__contacts__politic">
                            Политика АО «ЦПЛ» в отношении обработки персональных данных и 
                            Согласие на обработку данных участника Программы «Спасибо от Сбербанка»
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}