import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

const Navigation = () => (
    <nav>
        <NavLink to="/" exact style={css.link} activeStyle={css.activeLink}>
            Главная
        </NavLink>

        <NavLink to="/contacts" style={css.link} activeStyle={css.activeLink}>
            Контакты
        </NavLink>
    </nav>
);

export default Navigation;
