import { Component } from 'react';
import { Phonebook } from './Phonebook/Phonebook';
import { RenderNumbers } from './Phonebook/RenderNumbers/RenderNumbers';
import { nanoid } from 'nanoid';

export default class App extends Component {
  state = {
    contacts: [],
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

  render() {
    return (
      <>
        <Phonebook addUser={this.addUser} />
        <RenderNumbers contacts={this.state.contacts} />
      </>
    );
  }
}
