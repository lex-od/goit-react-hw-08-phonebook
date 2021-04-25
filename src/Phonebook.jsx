import { Redirect, Switch } from 'react-router';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import css from './styles/Phonebook.module.scss';
import routes from './routes';
import Container from './components/Container';
import AppBar from './components/AppBar';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import RegisterView from './views/RegisterView';
import ContactsView from './views/ContactsView';
import LoginView from './views/LoginView';
import HomeView from './views/HomeView';
import { authOps } from './redux/auth';

const Phonebook = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(authOps.getCurrentUser());
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Container>
            <AppBar />

            <Switch>
                <PublicRoute exact path={routes.home} component={HomeView} />
                <PublicRoute
                    path={routes.register}
                    restricted
                    redirectTo={routes.contacts}
                    component={RegisterView}
                />
                <PublicRoute
                    path={routes.login}
                    restricted
                    redirectTo={routes.contacts}
                    component={LoginView}
                />
                <PrivateRoute
                    path={routes.contacts}
                    redirectTo={routes.login}
                    component={ContactsView}
                />
                <Redirect to={routes.home} />
            </Switch>
        </Container>
    );
};

export default Phonebook;
