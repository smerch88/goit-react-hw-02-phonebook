import { Component } from 'react';

export class RenderNumbers extends Component {
  render() {
    const { contacts } = this.props;
    console.log(contacts);
    return (
      <>
        <ul>
          {contacts.map(contact => (
            <li key={contact.id}> {contact.name}</li>
          ))}
        </ul>
      </>
    );
  }
}
