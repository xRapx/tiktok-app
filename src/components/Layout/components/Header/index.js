import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import Button from '~/components/Button';
import AccountItems from '~/components/AccountItems';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import style from './Header.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(style);

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 3000);
    }, []);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/*   Logo  */}
                <img src={images.logo} alt="TikTok" />
                <div>
                    <Tippy
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
                    </Tippy>
                </div>
                {/*   Action Profile  */}
                <div className={cx('action')}>
                    <Button text>Upload</Button>
                    <Button primary>Log in</Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
