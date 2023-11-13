import React, { useState } from "react"
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';


export default function ContactForm ({onSubmit}){

    const [name, setName]= useState("");
    const [number, setNumber] = useState("");

    const nameId = nanoid();
    const telId = nanoid();
   
    
    const handleChangeName = (evt) => {
        setName(evt.target.value)
    };

    const handleChangeNumner =(evt) => {
        setNumber(evt.target.value)
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        onSubmit({name, number});
        reset();
    };

    const reset = () => {
        setName("");
        setNumber("");
    };

    return (
        <form className ={styles.contactForm} onSubmit={handleSubmit}>
            <label className={styles.inputLabel}>
                Name{" "}
        <input
        className= {styles.inputContent}
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
                    id={nameId}
                    value={name}
                    onChange={handleChangeName}
/>
            </label>
            <label className={styles.inputLabel}>
                Number{" "}
                <input
                className= {styles.inputContent}
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={number}
                    id={telId}
                    onChange={handleChangeNumner}
/>
            </label>
<button type = "submit" className= {styles.addContact}>
Add contact
</button>
</form>
    );
    }

ContactForm.propTypes = {
onSubmit: PropTypes.func.isRequired,
  };