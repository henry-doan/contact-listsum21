import { Component } from 'react';
import ContactList from './components/contacts/ContactList';

class App extends Component {
  state = { contacts: [
    { id: 1, firstName: "Tom", phone: "123-123-1233" },
    { id: 2, firstName: "Jerry", phone: "333-123-1233" },
    { id: 3, firstName: "Patrick", phone: "323-123-1233" },
  ]}

  deleteContact = (id) => {
    const { contacts } = this.state 
    this.setState({ contacts: contacts.filter( c => c.id !== id)})
  }

  render() {
    const { contacts } = this.state
    return (
      <>
        <h1>React Contact List!</h1>
        <ContactList 
          contacts={this.state.contacts}
          deleteContact={this.deleteContact} 
        />
        {/* <ContactList contacts={contacts} /> */}
      </>
    )
  }
}

export default App;