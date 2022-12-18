import { Component } from 'react';
import { Phonebook } from './Phonebook/Phonebook';
import { RenderNumbers } from './Phonebook/RenderNumbers/RenderNumbers';
import { nanoid } from 'nanoid';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: 'Rosie Simpson',
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

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    return (
      <>
        <Phonebook addUser={this.addUser} />
        <label htmlFor="">
          filter{' '}
          <input type="text" name="filter" onChange={this.handleChange} />
        </label>
        <RenderNumbers
          contacts={this.state.contacts}
          filter={this.state.filter}
        />
      </>
    );
  }
}
