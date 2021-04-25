import { Redirect, Route, Switch } from 'react-router';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import css from './styles/Phonebook.module.scss';
import routes from './routes';
import Container from './components/Container';
import AppBar from './components/AppBar';
import PrivateRoute from './components/PrivateRoute';
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
                <Route exact path={routes.home} component={HomeView} />
                <PrivateRoute
                    path={routes.contacts}
                    redirectTo={routes.login}
                    component={ContactsView}
                />
                <Route path={routes.register} component={RegisterView} />
                <Route path={routes.login} component={LoginView} />
                <Redirect to={routes.home} />
            </Switch>
        </Container>
    );
};

export default Phonebook;
