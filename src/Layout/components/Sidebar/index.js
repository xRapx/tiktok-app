import classNames from 'classnames/bind';
import style from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import config from '~/config';

const cx = classNames.bind(style);

function SideBar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For you" to={config.routes.home} icon={null} />
                <MenuItem title="Following" to={config.routes.follow} icon={null} />
                <MenuItem title="Live" to={config.routes.live} icon={null} />
            </Menu>
        </aside>
    );
}

export default SideBar;
