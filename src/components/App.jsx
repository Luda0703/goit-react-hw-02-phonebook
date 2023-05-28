import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

import { Container, H1, H2, P } from './Container.styled';



export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
    
  }
 
  // formSubmitHandler = data => {
  //   console.log(data)
  // }

  filterChange = e => {
    this.setState({filter: e.target.value})
  }

  visibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }

  addContact = data => {
    data.id = nanoid();
    const nameToLowerCase = data.name.toLowerCase();

    if (
      this.state.contacts.find(
        contact => contact.name.toLowerCase() === nameToLowerCase || contact.number === data.number
      )
    ) {
      alert(`${data.name}  ${data.number} is already in contacts`);
      return;
    }

    this.setState(prevState => ({
      contacts: [data, ...prevState.contacts],
    }));
  }

  deleteContacts = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    const visibleFilter = this.visibleContacts();
    return (
      <Container>
        <H1>Phonebook</H1>
        <ContactForm onSubmit={this.addContact}/>
        <H2>Contacts  {contacts.length}</H2>
        <Filter value={filter} onChange={this.filterChange}/>
        {contacts.length ? (
        <ContactList 
        contacts={visibleFilter} 
        onDeletContacts={this.deleteContacts}
        />
        ) : (
          <P>No contacts in phone book</P>
        )} 
      </Container>
    )
  }
 
};
