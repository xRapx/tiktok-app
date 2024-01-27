import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import style from './Button.module.scss';

const cx = classNames.bind(style);

// props nhận vào từ Header
function Button({
    to,
    href,
    small = false,
    large = false,
    text = false,
    primary = false,
    outline = false,
    disable = false,
    rounded = false,
    leftIcon,
    rightIcon,
    children,
    className,
    onClick,
    ...passProps
}) {
    //  đặt biến và kiểu dữ liệu = tyoe để thay đổi Element
    let Comp = 'button';

    // trong Biến Comp tạo 1 biến props để handle điều kiện thay đổi props nhận vào
    const props = {
        onClick,
        ...passProps,
    };
    // nếu có props Disable
    if (disable) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    //  tạo biến Class để thay đổi class khi sử dụng component button ở UI
    const classes = cx('wrapper', {
        //  Trường hợp custom riêng và thêm 1 attri className để tạo thêm custom
        // làm việc với Object => Nếu có thêm Attri là className={cx('...') thì sẻ chuyển className truyền vào thành key của Object đó}
        [className]: className,
        primary,
        outline,
        small,
        large,
        text,
        disable,
        rounded,
    });

    //return về 1 Component để bọc ngoài children và truyền props cục bộ trong Component cha là Hàm Button

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
