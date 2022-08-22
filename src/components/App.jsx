import { GlobalStyle } from './GlobalStyles';
import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import {ContactList} from './ContactList/ContactList'

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '45912566' },
      { id: 'id-2', name: 'Hermione Kline', number: '44389125' },
      { id: 'id-3', name: 'Eden Clements', number: '64517793' },
      { id: 'id-4', name: 'Annie Copeland', number: '22791261' },
    ],
    filter: '',
  };
  addContact = (values, {resetForm}) => {
      this.setState({
      contacts: [...this.state.contacts, values]
      })
    resetForm();
  };

  onFilterContact = (e) => {
    this.setState({
      filter: e.target.value,
    })
  };

  filteredContacts = () => {
    const result = this.state.contacts.filter((contact) => {
      const nameToLower = contact.name.toLowerCase();
      return nameToLower.includes(this.state.filter)
    })
    return result;
  }
  

  render() {

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.addContact} />
        <h2>Contacts</h2>
        <input type="text" name="filter" onChange={this.onFilterContact}/>
        <ContactList contacts={this.filteredContacts()} />

      <GlobalStyle/>
    </>
  );
  }
};
