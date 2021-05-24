import React from 'react';
import classnames from 'classnames/bind';

import styles from './styles.scss';
const cx = classnames.bind(styles);

const Button = ({ isFilled, onClick, children }) => (
  <button className={cx('button', { 'button--filled': !!isFilled })} onClick={onClick}>
    { children }
  </button>
);

export default Button;