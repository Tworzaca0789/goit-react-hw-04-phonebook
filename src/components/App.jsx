import React, { useState, useEffect } from "react";
import styles from './App.module.css';
import  {nanoid } from 'nanoid';
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import ContactListItem from "./ContactListItem/ContactListItem";
import SearchFilter from "./SearchFilter/SearchFilter";

export default function App() {

  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  const changeFilter = evt => {
    setFilter( evt.currentTarget.value );
  };

   const deleteContact = ContactId => {
    setContacts(prevContacts => 
       prevContacts.filter(contact => contact.id !== ContactId)
    )
  };

  const addContact = ({name, number}) => {
    const newContact = {id: nanoid(), name, number};
    const toTrackContact = contacts.find(contact => contact.name === newContact.name
      );

      toTrackContact? alert(`${name} +  is already in contacts.`) : setContacts([newContact, ...contacts]);
  };

    const toLowerCaseFilter = filter.toLowerCase();
    const filteredContact = contacts.filter(contact =>
      contact.name.toLowerCase().includes(toLowerCaseFilter)
    );

    useEffect(()=>{ 
      const contacts = localStorage.getItem("contacts");
      const parseContacts = JSON.parse(contacts);
      setContacts( parseContacts);
    }, []);

    useEffect(()=> {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    }, [contacts]);

    return (
    <div className= {styles.appBox}>
      <h1 className= {styles.phonebookTitle}>Phonebook</h1>
        <ContactForm onSubmit ={addContact} />
      <h2 className={styles.phonebookTitle}>Contacts</h2>
        <SearchFilter value = "filter" filter={filter}  onChange = {changeFilter}/>
        <ContactList
          contacts = {filteredContact}
          onDeleteContact = {deleteContact}
          >
          <ContactListItem/>
        </ContactList>
    </div>
  );
};