// import css from './styles/Phonebook.module.scss';
import Container from './components/Container';
import AppBar from './components/AppBar';
import ContactsView from './views/ContactsView';
// import HomeView from './views/HomeView';

const Phonebook = () => (
    <Container>
        <AppBar />

        {/* <HomeView /> */}
        <ContactsView />
    </Container>
);

export default Phonebook;
