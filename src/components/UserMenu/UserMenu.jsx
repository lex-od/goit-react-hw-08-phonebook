// import { connect } from 'react-redux';
import css from './UserMenu.module.scss';
// import { authSelectors, authOperations } from '../../redux/auth';

const UserMenu = ({ name, dispLogout }) => (
    <div className={css.container}>
        <span className={css.name}>Добро пожаловать, {name}</span>
        <button type="button" onClick={dispLogout}>
            Выйти
        </button>
    </div>
);
// const mapStateToProps = state => ({
//     name: authSelectors.getUsername(state),
// });

// const mapDispatchToProps = {
//     dispLogout: authOperations.logOut,
// };

export default UserMenu;
// export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
