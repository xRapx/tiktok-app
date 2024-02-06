import { useEffect, useState, useRef } from 'react';
import { useDebounce } from '~/hooks';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import style from './Search.module.scss';
import AccountItems from '~/components/AccountItems';
import * as apiSearch from '~/apiServices/apiSearch';

const cx = classNames.bind(style);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const debounde = useDebounce(searchValue, 500);
    const inputRef = useRef();

    useEffect(() => {
        if (!debounde.trim()) {
            setSearchResult([]);
            return;
        }
        const fetchApi = async () => {
            setLoading(true);

            const result = await apiSearch.search(debounde);

            setSearchResult(result);

            setLoading(false);
        };

        fetchApi();
    }, [debounde]);

    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
        setSearchResult([]);
    };

    const handleShowResult = () => {
        setShowResult(false);
    };

    return (
        <div>
            <HeadlessTippy
                interactive
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}> Accounts</h4>
                            {searchResult.map((result) => (
                                <AccountItems key={result.id} data={result} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleShowResult}
            >
                {/*   Input Search  */}
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        type="text"
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                        onChange={(e) => setSearchValue(e.target.value.trimStart())}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!searchValue && !loading && (
                        <button className={cx('clear')} onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon className={cx('icon-search')} icon={faMagnifyingGlass} />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
