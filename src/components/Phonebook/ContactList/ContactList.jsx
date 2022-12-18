import { Component } from 'react';

export class ContactList extends Component {
  render() {
    const { contacts, filter } = this.props;
    return (
      <>
        <ul>
          {contacts
            .filter(contact =>
              contact.name.toLowerCase().includes(filter.toLowerCase())
            )
            .map(contact => (
              <li key={contact.id}>
                {' '}
                {contact.name}: {contact.number}
                <button onClick={() => this.props.deleteUser(contact.id)}>
                  Delete
                </button>
              </li>
            ))}
        </ul>
      </>
    );
  }
}
