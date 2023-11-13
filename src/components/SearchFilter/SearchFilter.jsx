import React from "react";
import styles from './SearchFilter.module.css';
import PropTypes from 'prop-types';
 
const SearchFilter = ({ value, onChange }) => (
    <>
        <p className={styles.inputLabel}>Find contacts by name</p>
        <input className= {styles.inputContent}
        type="text"
        value={value}
        onChange={onChange}
        />
    </>
    );
    
SearchFilter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default SearchFilter;