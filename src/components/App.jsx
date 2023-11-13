

import React from "react";
import styles from './App.module.css';
import  {nanoid } from 'nanoid';
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import ContactListItem from "./ContactListItem/ContactListItem";
import SearchFilter from "./SearchFilter/SearchFilter";


class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: ''
  };

  addContact = (newContact) => {

    const toTrackContact = this.state.contacts.find(
      
      (contact) => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (!toTrackContact) {
      newContact.id = nanoid();

      this.setState((prevState) => ({
        contacts: [newContact, ...prevState.contacts],
      }));
    } else {
     
      alert(newContact.name + " is already in contacts.");
    }
  };

  deleteContact = (ContactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
      (contact) => contact.id !== ContactId
    ),
  }));
  }
  
  changeFilter = (evt) => {
    this.setState({ filter: evt.currentTarget.value });
  };

  componentDidMount(){
    const contacts = localStorage.getItem("contacts");
    const parseContacts = JSON.parse(contacts);

    if(parseContacts){
      this.setState({contacts: parseContacts});
    }
}

  componentDidUpdate(prevProps, prevState){
  if(this.state.contacts !== prevState.contacts){
    localStorage.setItem("contacts", JSON.stringify(this.state.contacts))
  }
}

  render() {
    const { contacts, filter } = this.state;
    const toLowerCaseFilter = filter.toLowerCase();
    const filteredContact = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(toLowerCaseFilter)
    );

    return (
    <div className= {styles.appBox}>
      <h1 className= {styles.phonebookTitle}>Phonebook</h1>
        <ContactForm onSubmit ={this.addContact} />
      <h2 className={styles.phonebookTitle}>Contacts</h2>
        <SearchFilter value= {filter} onChange = {this.changeFilter}/>
        <ContactList
          contacts = {filteredContact}
          onDeleteContact = {this.deleteContact}
          >
          <ContactListItem/>
        </ContactList>
    </div>
  );
}
}

export default App;