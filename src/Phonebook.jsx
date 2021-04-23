// import css from './styles/Phonebook.module.scss';
import Container from './components/Container';
import AppBar from './components/AppBar';
import ContactsView from './views/ContactsView';

const Phonebook = () => (
    <Container>
        <AppBar />

        <ContactsView />
    </Container>
);

export default Phonebook;
