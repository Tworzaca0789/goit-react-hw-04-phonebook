import React from "react";
import styles from './ContactListItem.module.css';
import PropTypes from 'prop-types';

const ContactListItem = ({ name, number}) => (
        <p className={styles.contactPerson}>
            ~ {name}: {number}
        </p>
    );

ContactListItem.propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
};
export default ContactListItem;