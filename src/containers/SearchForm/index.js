import React, { useState } from 'react';
import classnames from 'classnames/bind';
import SearchBar from '../SearchBar';

import styles from './styles.scss';
import SearchFields from '../SearchFields';
const cx = classnames.bind(styles);

const mockData = {
  data: [
    {
      location: "Calbasas, CA",
      cost: "$1.5k",
      type: "Appt.",
      bedsAmount: 2,
      bathroomsAmount: 2,
      image: "",
      description: "lorem ipsum",
    },
    {
      location: "Moscow, CA",
      cost: "$1.5k",
      type: "Appt.",
      bedsAmount: 2,
      bathroomsAmount: 2,
      image: "",
      description: "lorem ipsum",
    },
    {
      location: "New York, CA",
      cost: "$1.5k",
      type: "Appt.",
      bedsAmount: 2,
      bathroomsAmount: 2,
      image: "",
      description: "lorem ipsum",
    },
  ]
}

const SearchForm = () => {
  const [ searchData, setSearchData ] = useState('');

  return (
    <div className={cx('search-form')}>
      <SearchBar updateSearchData={setSearchData}/>
      <SearchFields data={mockData} filter={searchData}/>
    </div>
  );
};

export default SearchForm;