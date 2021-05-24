import React from 'react';
import classnames from 'classnames/bind';

import homeIcon from '../../assets/img/home_icon.png'
import styles from './styles.scss';
import Button from '../../components/Button';
const cx = classnames.bind(styles)

const Navbar = () => (
  <div className={cx('navigation')}>
    <img src={homeIcon} alt="home-icon" className={cx('navigation__icon')}/>
    <ul className={cx('navigation__list')}>
      <li
        className={cx('navigation__list--item')}
        onClick={() => console.log('buy')}
      >
        Buy a house
      </li>
      <li
        className={cx('navigation__list--item')}
        onClick={() => console.log('rent')}
      >
        Rent a house
      </li>
      <li
        className={cx('navigation__list--item')}
        onClick={() => console.log('mortgage')}  
      >
        Mortgage
      </li>
    </ul>
    <Button>
      Sign Up
    </Button>
  </div>
);

export default Navbar;