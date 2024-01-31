import { useEffect, useState, Fragment } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCircleXmark,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faMagnifyingGlass,
    faSignOut,
    faSpinner,
    faUser,
} from '@fortawesome/free-solid-svg-icons';

import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import Button from '~/components/Button';
import AccountItems from '~/components/AccountItems';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import style from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icon';
import Image from '~/components/Image';
import img1 from '~/assets/images/img-2.jpg';
import img2 from '~/assets/images/img-3.jpg';

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
    const [searchResult, setSearchResult] = useState([]);

    const currentUser = true;

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 3000);
    }, []);

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
                <div>
                    <HeadlessTippy
                        interactive
                        visible={searchResult.length > 0}
                        render={(attrs) => (
                            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                <PopperWrapper>
                                    <h4 className={cx('search-title')}> Accounts</h4>
                                    <AccountItems />
                                    <AccountItems />
                                    <AccountItems />
                                    <AccountItems />
                                </PopperWrapper>
                            </div>
                        )}
                    >
                        {/*   Input Search  */}
                        <div className={cx('search')}>
                            <input type="text" placeholder="Search accounts and videos" spellCheck={false} />
                            <button className={cx('clear')}>
                                <FontAwesomeIcon icon={faCircleXmark} />
                            </button>
                            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                            <button className={cx('search-btn')}>
                                <FontAwesomeIcon className={cx('icon-search')} icon={faMagnifyingGlass} />
                            </button>
                        </div>
                    </HeadlessTippy>
                </div>

                {/*   Action Profile  */}
                <div className={cx('action')}>
                    {currentUser ? (
                        <Fragment>
                            <Tippy delay={[0, 200]} content="Upload" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
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
                            <Image className={cx('user-avatar')} src={img1} alt="nguyen van a" fallback={img2} />
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
