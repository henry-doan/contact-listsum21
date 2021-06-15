import Contact from './Contact';
// const ContactList = ({ contacts }) => {
//   return(
    
//   )
// }

const ContactList = ({ contacts, deleteContact }) => (
  <>
    { contacts.map( c => (
      // <Contact id={c.id} firstName={c.firstName} phone={c.phone} />
      <Contact 
        {...c} 
        deleteContact={deleteContact}
      />
    ))}
  </>
)

export default ContactList;