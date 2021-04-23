// import css from './styles/Phonebook.module.scss';
import Container from './components/Container';
import AppBar from './components/AppBar';
// import RegisterView from './views/RegisterView';
// import ContactsView from './views/ContactsView';
// import LoginView from './views/LoginView';
import HomeView from './views/HomeView';

const Phonebook = () => (
    <Container>
        <AppBar />

        <HomeView />
        {/* <ContactsView /> */}
        {/* <RegisterView /> */}
        {/* <LoginView /> */}
    </Container>
);

export default Phonebook;
