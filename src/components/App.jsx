import { Component } from 'react';
import { ContactForm } from './Phonebook/ContactForm';
import { ContactList } from './Phonebook/ContactList/ContactList';
import { Filter } from './Phonebook/Filter/Filter';
import { nanoid } from 'nanoid';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addUser = data => {
    const newContact = {
      ...data,
      id: nanoid(),
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  setFilterValue = data => {
    console.log(data);
    this.setState({ filter: data });
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    return (
      <>
        {' '}
        <h1>Phonebook</h1>
        <ContactForm addUser={this.addUser} />
        <h2>Contacts</h2>
        <Filter setFilterValue={this.setFilterValue} />
        <ContactList
          contacts={this.state.contacts}
          filter={this.state.filter}
        />
      </>
    );
  }
}
