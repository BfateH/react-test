import './Header.css'
import logo_sber from '../../images/logo_sber.png'
import triangle from '../../images/triangle.png'
import Menu from '../Menu/Menu'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
    let [openClass, setOpenClass] = useState('')
    const openClickHandler = () => setOpenClass(prevValue => prevValue ? '' : 'open')
    
    return (
        <header className="white__wrapper">
            <div className="container">
                <div className="header__block">
                    <div className="header__logo">
                        <NavLink exact to="/">
                            <img className="header__logo__img" alt="logo" src={logo_sber} />
                        </NavLink>
                    </div>
                    <div onClick={openClickHandler} className="menu__btn">Меню</div>
                    <Menu className={`header__menu ${openClass}`}/>
                    <div className="header__city__login">
                        <div className="header__city">
                            <img className="header__city__img" src={triangle} alt="icon-triangle" />
                            <div className="header__city__name">Санкт-Петербург</div>
                        </div>
                        <div className="header__login">
                            <span className="header__login__search__icon"><i className="fas fa-search"></i></span>
                            <button className="btn btn--green-outline" type="button">Войти</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}