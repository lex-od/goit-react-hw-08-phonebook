import { connect } from 'react-redux';
import css from './UserMenu.module.scss';
import { authSls, authOps } from '../../redux/auth';

const UserMenu = ({ name, dispLogout }) => (
    <div className={css.container}>
        <span className={css.name}>Добро пожаловать, {name}</span>
        <button type="button" onClick={dispLogout}>
            Выйти
        </button>
    </div>
);

const mapStateToProps = state => ({
    name: authSls.getUsername(state),
});

const mapDispatchToProps = {
    dispLogout: authOps.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
