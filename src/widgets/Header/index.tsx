import { NavLink } from 'react-router-dom'
import { HOME, SHIPS } from "../../features/constants";

const Header = () => {
    return (
        <header className='header p-3'>
            <div className="container">
                <div className="header__content">
                    <nav className="header__nav d-flex flex-row gap-3 justify-content-end">
                        <NavLink className='header__link' to={HOME}>Главная</NavLink>
                        <NavLink className='header__link' to={SHIPS}>Корабли</NavLink>
                    </nav>
                </div>
            </div>
        </header>
    )
}
export default Header