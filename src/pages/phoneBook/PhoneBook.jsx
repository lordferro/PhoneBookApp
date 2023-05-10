import { ContactsForm } from 'components/ContactForm/ContactsForm';

import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import 'index.css';
import { Wrapper } from './PhoneBook.styled';

const PhoneBook = () => {
  return (
    <div className="container">
      <Wrapper className="shadow-sm p-3 mb-5 bg-body rounded">
        <h1>Phonebook</h1>
        <ContactsForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactsList />
      
      </Wrapper>
    </div>
  );
};

export default PhoneBook;