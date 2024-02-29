import classNames from 'classnames/bind';
import styles from './Notify.module.scss';
import { Fragment, useEffect, useState,useContext } from 'react';
import { NotifyingContext } from '~/store/NotifyingContext';


const cx = classNames.bind(styles);

function Notify() {
	const {infoNotify} = useContext(NotifyingContext)

    const [isNotify, setIsNotify] = useState(infoNotify.isNotify);
    const [isEndAnimate, setIsEndAnimate] = useState(false);

    useEffect(() => {
        setIsNotify(infoNotify.isNotify);
        setIsEndAnimate(false);

        let timeoutEndAnimate = setTimeout(() => {
            setIsEndAnimate(true);
        }, infoNotify.delay);

        return () => {
            clearTimeout(timeoutEndAnimate);
        };
    }, [infoNotify]);

    const handleCloseNotify = () => {
        setIsNotify(false);
    };

    return (
        <Fragment>
            {isNotify && (
                <div
                    className={cx('wrapper-notify', {
                        'hide-notify': isEndAnimate,
                    })}
                    onAnimationEnd={isEndAnimate ? handleCloseNotify : null}
                >
                    <div className={cx('container-content')}>
                        <div className={cx('notify-container')}>
                            <span className={cx('text-content')}>{infoNotify.content || 'Có lỗi xảy ra!'}</span>
                        </div>
                    </div>
                </div>
            )}
        </Fragment>
    );
}

export default Notify;
