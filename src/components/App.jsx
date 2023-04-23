import { Container, Title, ContactsTitle } from './App.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const { items } = useSelector(selectContacts);
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
      {isLoading && !error && <b>Request in progress...</b>}
      {items.length > 0 && <ContactList />}
      {/* {isLoading && <p>Loading contacts...</p>} */}
      {error && <p>{error}</p>}
      {/* <p>{items.length > 0 && JSON.stringify(items, null, 2)}</p> */}
    </Container>
  );
};
