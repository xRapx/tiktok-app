import React from 'react';
// import PropTypes from 'prop-types';
import styles from '../Contents.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const tadIndex = ['Top', 'Tài khoản', 'Video', 'LIVE'];

const MenuContents = () => {
    return (
        <nav className={cx('menu-item')}>
            {tadIndex.map((tab) => (
                <div className={cx('item')} key={tab}>
                    <div className={cx('under-line')}>{tab}</div>
                    <div className={cx('line')}></div>
                </div>
            ))}
        </nav>
    );
};

MenuContents.propTypes = {};

export default MenuContents;
