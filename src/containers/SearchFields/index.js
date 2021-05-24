import React, { useState } from 'react';
import classnames from 'classnames/bind';

import styles from './styles.scss';
const cx = classnames.bind(styles);

const SearchFields = ({ data, filter }) => {
  const [ houses, setHouses ] = useState(data.data);

  const mapHouses = () => {
    return houses
      .filter((house) => (house.location.toLowerCase().includes(filter.toLowerCase())))
      .map((house) => (
        <div className={cx('search-fields__card')}>
          <span>{house.location}</span>
          <span>{`${house.cost} / ${house.bedsAmount} Beds / ${house.type} ...3 more`}</span>
        </div>
      ));
  };

  return (
    <div className={cx('search-fields')}>
      { mapHouses() }
    </div>
  );
};

export default SearchFields;
