import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import styles from './ListItem.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const ListItem = ({ title }) => {
    return (
        <div className={cx('wrapper')}>
            <div>{title}</div>
            <Item />
            <Item />
            <Item />
            <Item />
        </div>
    );
};

ListItem.propTypes = {};

export default ListItem;
