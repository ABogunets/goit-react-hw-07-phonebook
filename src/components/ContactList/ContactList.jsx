import { useSelector } from 'react-redux';
import {
  ContactsWrapper,
  ContactsList,
  ContactsListItem,
} from 'components/ContactList/ContactList.styled';
import { Contact } from 'components/Contact/Contact';
// import { selectFilter, selectContacts } from 'redux/selectors';
// import { getFilteredContacts } from 'service-functions';
import { selectFilteredContacts } from 'redux/selectors';

export const ContactList = () => {
  // const contacts = useSelector(selectContacts).items;
  // const filterValue = useSelector(selectFilter);
  const filteredContacts = useSelector(selectFilteredContacts);
  return (
    <ContactsWrapper>
      <ContactsList>
        {filteredContacts.map(contact => (
          <ContactsListItem key={contact.id}>
            <Contact contact={contact} />
          </ContactsListItem>
        ))}
      </ContactsList>
    </ContactsWrapper>
  );
};
