import { lazy, Suspense } from 'react';
import { Redirect, Switch } from 'react-router';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import css from './styles/Phonebook.module.scss';
import routes from './routes';
import Container from './components/Container';
import AppBar from './components/AppBar';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { authOps } from './redux/auth';

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const ContactsView = lazy(() => import('./views/ContactsView'));

const Phonebook = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(authOps.getCurrentUser());
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Container>
            <AppBar />

            <Suspense fallback={<p>Загрузка...</p>}>
                <Switch>
                    <PublicRoute
                        exact
                        path={routes.home}
                        component={HomeView}
                    />
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
            </Suspense>
        </Container>
    );
};

export default Phonebook;
