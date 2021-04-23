import { NavLink } from 'react-router-dom';
import css from './Navigation.module.scss';

const Navigation = () => (
    <nav>
        <NavLink
            to="/"
            exact
            className={css.link}
            activeClassName={css.activeLink}
        >
            Главная
        </NavLink>

        <NavLink
            to="/contacts"
            className={css.link}
            activeClassName={css.activeLink}
        >
            Контакты
        </NavLink>
    </nav>
);

export default Navigation;
