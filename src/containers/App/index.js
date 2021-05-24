import classnames from 'classnames/bind';

import NavBar from '../NavBar';
import PageDescription from '../PageDescription';
import SearchForm from '../SearchForm';

import styles from './styles.scss';
const cx = classnames.bind(styles);

function App() {
  return (
    <div className={cx('app')}>
      <div className={cx('app__navigation')}>
        <NavBar />
      </div>
      <div className={cx('app__page-description')}>
        <PageDescription />
      </div>
      <SearchForm />
    </div>
  );
}

export default App;
