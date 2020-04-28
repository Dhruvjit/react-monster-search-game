import React from 'react';
import styles from './search-box.css';

export const SearchBox = ({placeholder, handleChange}) => (
    <input type={'search'} className={styles['search']}
           placeholder={placeholder}
           onChange={handleChange}
    />
)