import { Redirect, Route, Switch } from 'react-router';
// import css from './styles/Phonebook.module.scss';
import routes from './routes';
import Container from './components/Container';
import AppBar from './components/AppBar';
import RegisterView from './views/RegisterView';
import ContactsView from './views/ContactsView';
import LoginView from './views/LoginView';
import HomeView from './views/HomeView';

const Phonebook = () => (
    <Container>
        <AppBar />

        <Switch>
            <Route exact path={routes.home} component={HomeView} />
            <Route path={routes.contacts} component={ContactsView} />
            <Route path={routes.register} component={RegisterView} />
            <Route path={routes.login} component={LoginView} />
            <Redirect to={routes.home} />
        </Switch>
    </Container>
);

export default Phonebook;
