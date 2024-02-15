import { Fragment } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignOut,
    // faSpinner,
    faUser,
} from '@fortawesome/free-solid-svg-icons';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import Button from '~/components/Button';
import style from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import Search from '~/components/Search';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icon';
import Image from '~/components/Image';
// import img1 from '~/assets/images/img-2.jpg';
// import img2 from '~/assets/images/img-3.jpg';

const cx = classNames.bind(style);

const MENU_ITEM = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'EngLish',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tieng Viet',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: '/profile',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get coin',
        to: '/coin',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Setting',
        to: '/setting',
    },
    ...MENU_ITEM,
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Log Out',
        to: '/logout',
        separate: true,
    },
];

function Header() {
    const currentUser = true;

    const handleMenu = (menuItems) => {
        switch (menuItems.type) {
            case 'language':
                // asd
                break;
            default:
        }
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/*   Logo  */}
                <img src={images.logo} alt="TikTok" />
                {/*   Search Input  */}
                <Search />

                {/*   Action Profile  */}
                <div className={cx('action')}>
                    {currentUser ? (
                        <Fragment>
                            <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                    <MessageIcon />
                                    <InboxIcon />
                                </button>
                            </Tippy>
                        </Fragment>
                    ) : (
                        <Fragment>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </Fragment>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEM} onChange={handleMenu}>
                        {currentUser ? (
                            <Image className={cx('user-avatar')} src="" alt="nguyen van a" />
                        ) : (
                            <button className={cx('btn-menu')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
