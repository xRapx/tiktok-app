/* eslint-disable react/style-prop-object */
import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Contents.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import img1 from '~/assets/images/img-1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart, faSave, faShare } from '@fortawesome/free-solid-svg-icons';
import Video from '~/components/Videos/Videos';

const cx = classNames.bind(styles);

const ItemContents = () => {
    return (
        <div className={cx('wrapper-video')}>
            <div>
                <div className={cx('wrapper-title')}>
                    <img src={img1} alt="" className={cx('avatar')} />

                    <div className={cx('title')}>
                        <h3>Quan Minh</h3>
                        <h4>hmquan</h4>
                        <span>Great Idea! What should I restore next?</span>
                        <button>More</button>
                    </div>

                    <Button outline small className={cx('follow-btn')}>
                        Follow
                    </Button>
                </div>
                <div className={cx('div-video')}>
                    <div className={cx('video')}>
                        <Video />
                    </div>
                    <div className={cx('wrapper-icons')}>
                        <div className={cx('icon')}>
                            <FontAwesomeIcon icon={faHeart} className="icon-item" />
                        </div>
                        <div className={cx('icon')}>
                            <FontAwesomeIcon icon={faComment} className="icon-item" />
                        </div>
                        <div className={cx('icon')}>
                            <FontAwesomeIcon icon={faSave} className="icon-item" />
                        </div>
                        <div className={cx('icon')}>
                            <FontAwesomeIcon icon={faShare} className="icon-item" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

ItemContents.propTypes = {};

export default ItemContents;
