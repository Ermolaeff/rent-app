import React from 'react';
import classnames from 'classnames/bind';

import styles from './styles.scss';
const cx = classnames.bind(styles);

const PageDescription = () => (
  <div className={cx('page-description')}>
    <h1 className={cx('page-description__heading')}>
      Find your ideal home
    </h1>
    <p className={cx('page-description__text')}>
      Search from more than 19 million of inspected appartments, houses, cottages, villas, manors and mansions
    </p>
  </div>
);

export default PageDescription;