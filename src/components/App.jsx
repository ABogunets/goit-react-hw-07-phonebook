import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container, Title, ContactsTitle, Error } from './App.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Loader } from './Loader/Loader';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const contactItems = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <Filter />
      <ContactsTitle>Contacts</ContactsTitle>
      {isLoading && !error && <Loader />}

      {contactItems.length > 0 ? (
        <ContactList />
      ) : (
        <p>There are no entries in the phonebook yet</p>
      )}
      {error && <Error>Oops, sorry, something went wrong...</Error>}
      <ToastContainer autoClose={3000} />
    </Container>
  );
};
