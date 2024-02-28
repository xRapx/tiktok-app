import React from 'react';
import Contents from '~/Layout/components/Contents';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

const Home = () => {
    return (
        <div className={cx('wrapper')}>
            <Contents />;
        </div>
    );
};

export default Home;
