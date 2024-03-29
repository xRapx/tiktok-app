/* eslint-disable react/style-prop-object */
import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import styles from '../Contents.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import img1 from '~/assets/images/img-1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart, faSave, faShare } from '@fortawesome/free-solid-svg-icons';
import Video from '~/components/Videos/Videos';
import AvatarTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from '~/components/SuggestedAccounts/AccountPreview';

const cx = classNames.bind(styles);

const ItemContents = () => {
    const [click, setClick] = useState(true);

    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div className={cx('wrapper-video')}>
            <div>
                <AvatarTippy interactive delay={[800, 0]} offset={[-100, 0]} placement="bottom" render={renderPreview}>
                    <div className={cx('wrapper-title')}>
                        <img src={img1} alt="" className={cx('avatar')} />

                        <div className={cx('title')}>
                            <h3>Quan Minh</h3>
                            <h4>hmquan</h4>
                            <span>Great Idea! What should I restore next?</span>
                            <button>More</button>
                        </div>
                        {click ? (
                            <Button outline small className={cx('follow-btn')} onClick={() => setClick(false)}>
                                Follow
                            </Button>
                        ) : (
                            <Button text outline large className={cx('follow-btn')} onClick={() => setClick(true)}>
                                Đang Follow
                            </Button>
                        )}
                    </div>
                </AvatarTippy>
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
    );
};

ItemContents.propTypes = {};

export default ItemContents;
