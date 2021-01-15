import { NavLink } from 'react-router-dom'
import './Menu.css'

export default function Menu(props) {
    return (
        <nav className={props.className}>
            <ul>
                <li><NavLink exact to="/coupons">Купоны и сертификаты</NavLink></li>
                <li><NavLink exact to="/dreams">Впечатления</NavLink></li>
                <li><NavLink exact to="/avia">Авиабилеты</NavLink></li>
                <li><NavLink exact to="/tickets">Ж/д билеты</NavLink></li>
                <li><NavLink exact to="/hotels">Отели</NavLink></li>
                <li><NavLink exact to="/carshering">Каршеринг</NavLink></li>
                <li><NavLink exact to="/theaters">Театры</NavLink></li>
                <li><NavLink exact to="/save">Страхование</NavLink></li>
                <li><NavLink exact to="/connect">Как подключиться</NavLink></li>
                <li><NavLink exact to="/partners">Партнеры</NavLink></li>
            </ul>
        </nav>
    )
}