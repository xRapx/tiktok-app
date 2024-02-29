import Header from '~/Layout/components/Header';
import SideBar from '~/Layout/components/Sidebar';
import classNames from 'classnames/bind';
import style from './DefaultLayout.module.scss';
import { UserAuth } from '~/store/AuthContext';
import { useEffect } from 'react';
import AuthForm from '~/components/Auth';
import Login from '~/components/Auth/Login';

const cx = classNames.bind(style);

function DefaultLayout({ children }) {
    const { openFormLogin } = UserAuth();

    useEffect(() => {
        document.body.style = openFormLogin ? 'overflow-y: hidden' : 'overflow-y: overlay';
    }, [openFormLogin]);

    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                {/*----------------------SideBar ------------------------------ */}
                <SideBar />
                <div className={cx('content')}>{children}</div>
            </div>
            {/*----------------------Set DefaultLayout = ????? ------------------------------ */}
            {!openFormLogin && <AuthForm>{!openFormLogin && <Login />}</AuthForm>}
        </div>
    );
}

export default DefaultLayout;
