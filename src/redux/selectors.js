import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filter;

// export const selectFilteredContacts = state => {
//   const contacts = selectContacts(state).items;
//   const filterValue = selectFilter(state);
//   const normalizedFilter = filterValue.toLowerCase();
//   console.log('FilteredContacts');
//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(normalizedFilter)
//   );
// };

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filterValue) => {
    // const contacts = selectContacts(state).items;
    // const filterValue = selectFilter(state);
    const normalizedFilter = filterValue.toLowerCase();
    console.log('FilteredContacts');
    return contacts.items.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);
