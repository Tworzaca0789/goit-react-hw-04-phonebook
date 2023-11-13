import React from "react";
import styles from './ContactList.module.css';
import ContactListItem from '../ContactListItem/ContactListItem';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDeleteContact }) => (
        <ul className={styles.contactList}>
            {contacts.map(({ id, name, number }) => (
                <li key={id} className={styles.contactItem}>
                    <ContactListItem id={id} name={name} number={number} />
                    <button className={styles.contactDeleteBtn} onClick={() => onDeleteContact(id)}>
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;