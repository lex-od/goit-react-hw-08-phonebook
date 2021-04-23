// import { connect } from 'react-redux';
import css from './App.module.scss';
import Navigation from '../Navigation';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';
// import { authSelectors } from '../redux/auth';

const AppBar = ({ isAuth }) => (
    <header style={css.header}>
        <Navigation />
        {isAuth ? <UserMenu /> : <AuthNav />}
    </header>
);

// const mapStateToProps = state => ({
//     isAuthenticated: authSelectors.getIsAuthenticated(state),
// });

export default AppBar;
// export default connect(mapStateToProps)(AppBar);
