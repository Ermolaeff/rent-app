import React, { useState } from 'react';
import classnames from 'classnames/bind';

import Button from '../../components/Button';

import styles from './styles.scss';
const cx = classnames.bind(styles);

const SearchBar = ({ updateSearchData }) => {
  const [ searchValue, setSearchValue ] = useState('');

  return (
    <div className={cx('search-bar')}>
      <input
        className={cx('search-bar__input')}
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        placeholder='Search for address'
      />
      <div className={cx('search-bar__button')}>
        <Button isFilled onClick={updateSearchData(searchValue)}>Search</Button>
      </div>
    </div>
  );
};

export default SearchBar;