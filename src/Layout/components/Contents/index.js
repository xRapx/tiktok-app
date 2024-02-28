import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Contents.module.scss';
import ItemContents from './ItemContents/ItemContents';

const cx = classNames.bind(styles);

const Contents = () => {
    return (
        <div className={cx('wrapper')}>
            <ItemContents />
            <ItemContents />
            <ItemContents />
            <ItemContents />
        </div>
    );
};

Contents.propTypes = {};

export default Contents;
