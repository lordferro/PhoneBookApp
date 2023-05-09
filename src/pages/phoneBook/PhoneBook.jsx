import { ContactsForm } from 'components/ContactForm/ContactsForm';

import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import 'index.css';
import { Wrapper } from './PhoneBook.styled';
import { ToastContainer } from 'react-toastify';

const PhoneBook = () => {
  return (
    <Wrapper>
      <h1>Phonebook</h1>
      <ContactsForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
      <ToastContainer />
    </Wrapper>
  );
};

export default PhoneBook;