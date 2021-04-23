import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.scss';

const AuthNav = () => (
    <div>
        <NavLink to="/register" style={css.link} activeStyle={css.activeLink}>
            Регистрация
        </NavLink>
        <NavLink to="/login" style={css.link} activeStyle={css.activeLink}>
            Логин
        </NavLink>
    </div>
);

export default AuthNav;
