import { useState } from 'react';
import ContactList from './components/contacts/ContactList';

const App = ({}) => {
  const [contacts, setContacts] = useState([
    { id: 1, firstName: "Tom", phone: "123-123-1233" },
    { id: 2, firstName: "Jerry", phone: "333-123-1233" },
    { id: 3, firstName: "Patrick", phone: "323-123-1233" },
  ])

  const deleteContact = (id) => {
    setContacts(contacts.filter( c => c.id !== id))
  }
  return (
    <>
      <h1>React Contact List!</h1>
      <ContactList 
        contacts={contacts} 
        deleteContact={deleteContact}
      />
    </>
  )
}

export default App;
